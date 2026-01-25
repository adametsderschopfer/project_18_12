'use client';

import React, {useState, useEffect} from 'react';
import ProductCard from '@/components/product-card';
import useSWR from 'swr';
import {ICategory, IProduct} from "../../../../../types";
import {CategorySidebar} from "@/components/category-sidebar";
import {LoaderCircle} from "lucide-react";


const fetchProducts = async (categoryId: string, page: number) => {
  const res = await fetch(`/api/catalog/${categoryId}?page=${page}&limit=16`);
  return await res.json();
};

const fetchSubCategories = async (categoryId: string) => {
  const res = await fetch(`/api/catalog/${categoryId}/nested`);
  if (!res.ok) {
    throw new Error('Ошибка при загрузке подкатегорий');
  }
  return res.json();
};

const ProductListPage = ({params}: { params: Promise<{ categoryId: string }> }) => {
  const categoryId = React.use(params).categoryId;
  const [page, setPage] = useState(1);
  const [allProducts, setAllProducts] = useState<IProduct[]>([]);

  const {data, error, isLoading} = useSWR(
    categoryId ? `/api/catalog/${categoryId}?page=${page}&limit=16` : null,
    () => fetchProducts(categoryId, page)
  );

  const [subCategories, setSubCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    const loadSubCategories = async () => {
      try {
        const categories = await fetchSubCategories(categoryId);
        setSubCategories(categories);
      } catch (err) {
        console.error('Error fetching subcategories:', err);
      }
    };

    loadSubCategories();
  }, [categoryId]);

  useEffect(() => {
    if (data && data.products.length > 0) {
      setAllProducts((prevProducts) => [...prevProducts, ...data.products]);
    }
  }, [data]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {subCategories.length > 0 && (
          <aside>
            <CategorySidebar categories={subCategories}/>
          </aside>
        )}

        <div className={subCategories.length > 0 ? "lg:col-span-3" : "lg:col-span-4"}>
          <h1 className="text-4xl mb-8">Каталог</h1>

          {isLoading ? (
            <LoaderCircle size={45}/>
          ) : error ? (
            <strong>Ошибка загрузки товаров.</strong>
          ) : allProducts.length === 0 ? (
            <div className="text-center py-12 bg-gray-100">
              <p className="text-xl text-gray-600">
                В этой категории пока нет товаров
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {allProducts.map(product => (
                <ProductCard key={product.id} product={product}/>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductListPage;
