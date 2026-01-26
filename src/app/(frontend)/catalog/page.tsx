// app/page.tsx
import Link from 'next/link';
import {ArrowRight, Layers} from 'lucide-react';
import {getCategories} from '@/lib/actions/getCategories';
import {use} from 'react';
import HeadTitle from '@/components/ui/head-title';

// Типы (можно вынести в отдельный файл)
interface Category {
  id: string;
  name: string;
  slug?: string; // если используется, иначе можно убрать
  subCategories: Category[];
}

const Catalog = () => {
  const categories: Category[] = use(getCategories());

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8">Каталог товаров</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div key={category.id} className="border border-gray-200 bg-white overflow-hidden">
            <Link
              href={`/catalog/${category.id}`} // или category.slug, если есть
              className="h-full flex flex-col p-6 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <Layers className="w-6 h-6 text-gray-600"/>
                <h2 className="text-2xl font-semibold">{category.name}</h2>
              </div>

              {category.subCategories && category.subCategories.length > 0 && (
                <>
                  <p className="text-sm text-gray-600 mb-4">
                    {category.subCategories.length} подкатегорий
                  </p>
                  <ul className="space-y-2 mb-4">
                    {category.subCategories.slice(0, 3).map((child) => (
                      <li key={child.id} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 flex-shrink-0"/>
                        <span className="truncate">{child.name}</span>
                      </li>
                    ))}
                    {category.subCategories.length > 3 && (
                      <li className="text-xs text-gray-500">
                        +{category.subCategories.length - 3} ещё
                      </li>
                    )}
                  </ul>
                </>
              )}

              <div className="mt-auto inline-flex items-center gap-2 text-black hover:gap-4 transition-all">
                <span>Перейти в категорию</span>
                <ArrowRight className="w-5 h-5"/>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
