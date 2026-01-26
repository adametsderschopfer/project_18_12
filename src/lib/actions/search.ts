// app/actions/search.ts
'use server';

import prisma from '@/lib/prisma';

export async function searchProducts(query: string) {
  if (!query.trim()) {
    return [];
  }

  const products = await prisma.product.findMany({
    where: {
      OR: [
        { name: { contains: query, mode: 'insensitive' } },
        { description: { contains: query, mode: 'insensitive' } },
        { article: { contains: query, mode: 'insensitive' } },
      ],
    },
    include: {
      category: true,
      variants: true,
    },
    take: 50,
  });

  return products;
}
