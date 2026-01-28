// app/api/gifts-image/route.ts

import { NextRequest, NextResponse } from 'next/server';
import ky from 'ky';
import PQueue from 'p-queue';

export const dynamic = 'force-dynamic';
export const revalidate = 0;

// Константы для кеширования
const CACHE_DURATION_SECONDS = 30 * 24 * 60 * 60; // 1 месяц в секундах
const CACHE_CONTROL_HEADER = `public, max-age=${CACHE_DURATION_SECONDS}, immutable`;

// Очередь запросов для соблюдения рейт-лимита (5 запросов в секунду)
const requestQueue = new PQueue({
  interval: 1000, // 1 секунда
  intervalCap: 5, // 5 запросов в секунду
  carryoverConcurrencyCount: true,
  timeout: 60000, // 60 секунд таймаут на запрос в очереди
});

export async function GET(request: NextRequest) {
  try {
    // Получаем относительный путь из query параметра
    const searchParams = request.nextUrl.searchParams;
    const relativePath = searchParams.get('path');

    if (!relativePath) {
      return NextResponse.json(
        { error: 'Missing path parameter' },
        { status: 400 }
      );
    }

    // Получаем учетные данные из переменных окружения
    const login = process.env.GIFTS_RU_LOGIN;
    const password = process.env.GIFTS_RU_PASSWORD;

    if (!login || !password) {
      return NextResponse.json(
        { error: 'Missing authentication credentials' },
        { status: 500 }
      );
    }

    // Формируем полный URL БЕЗ учетных данных
    const imageUrl = `https://api2.gifts.ru/export/v2/catalogue/${relativePath}`;

    // Создаем заголовок авторизации
    const authHeader = `Basic ${Buffer.from(`${login}:${password}`).toString('base64')}`;

    // Настраиваем клиента ky с ретраями
    const apiClient = ky.create({
      headers: {
        'Authorization': authHeader,
        'Accept': 'image/*',
      },
      timeout: 30000, // 30 секунд таймаут
      retry: {
        limit: 5, // Уменьшаем до 5 попыток (было 10)
        methods: ['get'],
        statusCodes: [408, 429, 500, 502, 503, 504], // Убираем 413
        maxRetryAfter: 60000,
        backoffLimit: 15000, // Увеличиваем до 15 сек для 429
        delay: (retryCount) => {
          // Экспоненциальная задержка + случайный джиттер
          // 2с, 4с, 8с, 16с, 32с...
          const baseDelay = 2000 * Math.pow(2, retryCount - 1);
          const jitter = Math.random() * 1000; // 0-1с случайная задержка
          return Math.min(baseDelay + jitter, 15000);
        },
      },
    });

    let response;
    try {
      // Выполняем запрос через очередь для соблюдения рейт-лимита
      response = await requestQueue.add(() => apiClient.get(imageUrl), {
        throwOnTimeout: true,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Unknown error';

      console.error(`Failed to fetch image:`, {
        path: relativePath,
        queueSize: requestQueue.size,
        pending: requestQueue.pending,
        error: errorMessage,
      });

      // Специальная обработка для 429 (Too Many Requests)
      if (errorMessage.includes('429') || errorMessage.includes('Too Many Requests')) {
        return NextResponse.json(
          {
            error: 'Rate limit exceeded. Please try again later.',
            path: relativePath,
            retryAfter: '1 second',
          },
          { status: 429 }
        );
      }

      return NextResponse.json(
        {
          error: 'Failed to fetch image',
          path: relativePath,
          message: errorMessage,
        },
        { status: 500 }
      );
    }

    // Получаем тип контента
    const contentType = response.headers.get('content-type') || 'image/jpeg';

    // Читаем данные изображения
    const imageData = await response.arrayBuffer();

    // Возвращаем изображение с правильными заголовками кеширования (1 месяц)
    return new NextResponse(imageData, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': CACHE_CONTROL_HEADER,
        'Content-Length': response.headers.get('content-length') || '',
        'X-RateLimit-Queue-Size': requestQueue.size.toString(),
        'X-RateLimit-Pending': requestQueue.pending.toString(),
      },
    });

  } catch (error) {
    console.error('Image loading error:', error);
    return NextResponse.json(
      {
        error: 'Internal server error',
        message: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
