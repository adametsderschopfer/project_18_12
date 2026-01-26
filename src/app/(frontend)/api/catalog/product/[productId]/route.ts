import { NextResponse } from 'next/server';
import prisma from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ productId: string }> }
) {
  const { productId } = await params;

  try {
    // Сначала находим исходный товар, чтобы получить groupId
    const product = await prisma.product.findUnique({
      where: { id: productId },
      select: { groupId: true },
    });

    if (!product) {
      return NextResponse.json({ error: 'Товар не найден' }, { status: 404 });
    }

    let groupProducts;

    if (product.groupId) {
      // Загружаем все товары из той же группы
      groupProducts = await prisma.product.findMany({
        where: { groupId: product.groupId },
        include: {
          category: true,
          variants: true,
        },
        orderBy: { createdAt: 'asc' },
      });
    } else {
      // Если у товара нет группы — возвращаем только его
      const singleProduct = await prisma.product.findUnique({
        where: { id: productId },
        include: {
          category: true,
          variants: true,
        },
      });
      groupProducts = singleProduct ? [singleProduct] : [];
    }

    return NextResponse.json(groupProducts);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Ошибка при получении товаров группы' }, { status: 500 });
  }
}
