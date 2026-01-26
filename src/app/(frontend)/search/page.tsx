// app/search/page.tsx
import ProductCard from "@/components/product-card";
import { Search } from "lucide-react";
import {searchProducts} from "@/lib/actions/search";

interface SearchPageProps {
  searchParams: Promise<{ q?: string }>;
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { q = "" } = await searchParams;
  const results = q ? await searchProducts(q) : [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl mb-2">Результаты поиска</h1>
        {q && (
          <p className="text-gray-600">
            По запросу "{q}" найдено товаров: {results.length}
          </p>
        )}
      </div>

      {!q ? (
        <div className="text-center py-12 bg-gray-100">
          <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-xl text-gray-600">Введите запрос для поиска</p>
        </div>
      ) : results.length === 0 ? (
        <div className="text-center py-12 bg-gray-100">
          <Search className="w-16 h-16 mx-auto mb-4 text-gray-400" />
          <p className="text-xl text-gray-600 mb-2">Ничего не найдено</p>
          <p className="text-gray-500">Попробуйте изменить запрос</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {results.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchPage;
