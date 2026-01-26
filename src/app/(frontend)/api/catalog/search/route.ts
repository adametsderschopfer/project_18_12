// app/api/search/route.ts
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const query = searchParams.get('q')?.trim() || '';

  if (!query) {
    return NextResponse.json([]);
  }

  const words = query
    .toLowerCase()
    .split(/\s+/)
    .filter(w => w.length > 0);

  try {
    const whereConditions = words.map(word => ({
      OR: [
        { name: { contains: word, mode: 'insensitive' } },
        { description: { contains: word, mode: 'insensitive' } },
        { article: { contains: word, mode: 'insensitive' } },
      ],
    }));

    const products = await prisma.product.findMany({
      where: {
        AND: whereConditions,
      },
      include: {
        category: true,
        variants: true,
      },
      take: 100,
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json({ error: 'Ошибка поиска' }, { status: 500 });
  }
}
