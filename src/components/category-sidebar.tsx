import React, {FC} from "react";
import {ICategory} from "../../types";
import {useParams} from "next/navigation";
import Link from "next/link";

interface ICategorySidebarProps {
  categories: ICategory[];
}

export const CategorySidebar: FC<ICategorySidebarProps> = ({ categories }) => {
  const { categorySlug } = useParams();

  return (
    <div className="bg-white border border-gray-200 p-4">
      <h3 className="text-lg mb-4">Категории</h3>
      <nav className="space-y-1">
        {categories.map(category => (
          <div key={category.id}>
            <Link
              href={`/catalog/${category.id}`}
              className={`flex items-center justify-between py-2 px-3 hover:bg-gray-100 transition-colors ${
                categorySlug === category.id ? 'bg-black text-white hover:bg-gray-800' : ''
              }`}
            >
              <span>{category.name}</span>
            </Link>
          </div>
        ))}
      </nav>
    </div>
  );
};
