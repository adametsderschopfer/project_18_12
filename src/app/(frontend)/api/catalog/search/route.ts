// app/api/search/[query]/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest, { params }: { params: Promise<{ query: string }> }) {
  const { query } = await params;
  console.log(query);
  return NextResponse.next()
  //
  // // Извлекаем параметры пагинации
  // const searchParams = req.nextUrl.searchParams;
  // const limit = parseInt(searchParams.get('limit') || '10', 10);
  // const page = parseInt(searchParams.get('page') || '1', 10);
  //
  // // Валидация
  // if (isNaN(limit) || isNaN(page) || limit <= 0 || page <= 0) {
  //   return NextResponse.json({ error: 'Invalid pagination parameters' }, { status: 400 });
  // }
  //
  // const skip = (page - 1) * limit;
  //
  // // Условие поиска по name, description и brand
  // const searchCondition = {
  //   OR: [
  //     { name: { contains: query, mode: 'insensitive' } },
  //     { brand: { contains: query, mode: 'insensitive' } },
  //   ],
  // };
  //
  // // Получаем продукты
  // const products = await prisma.product.findMany({
  //   where: searchCondition,
  //   skip,
  //   take: limit,
  // });
  //
  // // Получаем общее количество совпадений
  // const totalCount = await prisma.product.count({
  //   where: searchCondition,
  // });
  //
  // return NextResponse.json({
  //   products,
  //   totalCount,
  //   page,
  //   limit,
  // });
}
