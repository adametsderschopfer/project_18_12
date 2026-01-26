import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { getCategories } from '@/lib/actions/getCategories';

interface Category {
  id: string;
  name: string;
  slug?: string;
  subCategories: Category[];
}

export default async function HomePage() {
  const categories: Category[] = await getCategories();
  const visibleCategories = categories.slice(0, 6);
  const hasMore = categories.length > 6;

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-black text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl mb-6">Добро пожаловать в наш магазин</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Широкий выбор качественных товаров для вашего комфорта и удобства
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 text-lg hover:bg-gray-200 transition-colors"
          >
            Перейти в каталог
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* Categories */}
      <section className="container mx-auto px-4">
        <h2 className="text-3xl mb-8">Категории товаров</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleCategories.map((category) => (
            <Link
              key={category.id}
              href={`/catalog/${category.id}`}
              className="group border-2 border-gray-200 hover:border-black transition-colors p-8 bg-white"
            >
              <h3 className="text-2xl mb-4">{category.name}</h3>
              {category.subCategories && category.subCategories.length > 0 && (
                <ul className="space-y-2 text-gray-600">
                  {category.subCategories.slice(0, 3).map((child) => (
                    <li key={child.id} className="flex items-center gap-2">
                      <ArrowRight className="w-4 h-4" />
                      {child.name}
                    </li>
                  ))}
                  {category.subCategories.length > 3 && (
                    <li className="text-sm text-gray-500">
                      +{category.subCategories.length - 3} ещё
                    </li>
                  )}
                </ul>
              )}
              <div className="mt-6 inline-flex items-center gap-2 group-hover:gap-4 transition-all">
                <span>Смотреть товары</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          ))}
        </div>

        {hasMore && (
          <div className="text-center mt-10">
            <Link
              href="/catalog"
              className="inline-flex items-center gap-2 bg-black text-white px-6 py-3 hover:bg-gray-800 transition-colors"
            >
              Перейти в каталог
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        )}
      </section>

      {/* Features */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl mb-2">Быстрая доставка</h3>
              <p className="text-gray-600">Доставим ваш заказ в течение 1-3 дней</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Гарантия качества</h3>
              <p className="text-gray-600">Все товары проходят проверку качества</p>
            </div>
            <div>
              <h3 className="text-xl mb-2">Удобная оплата</h3>
              <p className="text-gray-600">Принимаем все виды платежей</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
