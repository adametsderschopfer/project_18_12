'use client';

import Link from 'next/link';
import {useParams} from 'next/navigation';
import {useEffect, useState} from 'react';
import {ArrowLeft, Check, ShoppingCart} from 'lucide-react';
import {IProduct, Param} from "../../../../../../types";
import {addToCart} from "@/lib/cart";
import {SmartImage} from "@/components/smart-image";

// Типы на основе вашей Prisma-модели
interface ProductVariant {
  id: string;
  name: string;
  price: number | null;
  params: Array<Param> | null;
  pictures: unknown; // Может быть строкой или массивом — обработаем отдельно
}

interface Category {
  id: string;
  name: string;
}

interface Product {
  id: string;
  name: string;
  article: string;
  description: string | null;
  price: number | null;
  pictures: unknown; // Может быть строкой или массивом — обработаем отдельно
  params: Array<Param> | null;
  categoryId: string | null;
  category: Category | null;
  variants: ProductVariant[];
  createdAt: string;
  updatedAt: string;
}

// Утилита для безопасного парсинга pictures
const parsePictures = (pictures: unknown): string[] => {
  if (Array.isArray(pictures)) {
    return pictures;
  }
  if (typeof pictures === 'string') {
    try {
      const trimmed = pictures.trim();
      if (trimmed === '') return [];
      const parsed = JSON.parse(trimmed);
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      console.warn('Не удалось распарсить pictures:', pictures);
      return [];
    }
  }
  return [];
};

// Утилита для отображения параметров
const renderParams = (params: Array<Param> | null) => {
  if (!params || params.length === 0) return null;

  return (
    <div className="mb-8">
      <h3 className="text-lg mb-3">Характеристики:</h3>
      <ul className="space-y-2">
        {params.map((param) => (
          <li key={param.code} className="flex justify-between border-b pb-1 flex-col md:flex-row">
            <span className="text-gray-600 min-w-max mr-4">{param.label}:</span>
            <span className="font-medium md:text-right">{param.value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProductDetail = () => {
  const params = useParams<{ productId: string }>();
  const productId = params?.productId;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [groupProducts, setGroupProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  useEffect(() => {
    if (!productId) {
      setError('ID товара не указан');
      setLoading(false);
      return;
    }

    const fetchProductGroup = async () => {
      try {
        setLoading(true);
        const res = await fetch(`/api/catalog/product/${encodeURIComponent(productId)}`);
        if (!res.ok) {
          const errorData = await res.json().catch(() => ({}));
          throw new Error(errorData.error || 'Товар не найден');
        }
        const data: Product[] = await res.json();
        if (!Array.isArray(data) || data.length === 0) {
          throw new Error('Некорректный ответ от сервера');
        }
        setGroupProducts(data);
        const main = data[0];
        setSelectedProduct(main);
        setSelectedVariant(main.variants.length > 0 ? main.variants[0] : null);
        setError(null);
      } catch (err) {
        setError((err as Error).message || 'Ошибка загрузки товара');
      } finally {
        setLoading(false);
      }
    };

    fetchProductGroup();
  }, [productId]);

  useEffect(() => {
    if (addedToCart) {
      const timer = setTimeout(() => setAddedToCart(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [addedToCart]);

  const handleAddToCart = () => {
    addToCart(selectedProduct as IProduct);
    setAddedToCart(true);
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <p className="text-xl">Загрузка...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl text-red-600">Ошибка: {error}</h1>
        <Link href="/catalog" className="mt-4 inline-block text-blue-600 hover:underline">
          ← Вернуться в каталог
        </Link>
      </div>
    );
  }

  if (!selectedProduct) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl">Товар не найден</h1>
      </div>
    );
  }

// Получаем все изображения: из товара + из варианта (если есть)
  const baseVariantPictures = parsePictures(selectedVariant?.pictures);
  const basePictures = parsePictures(selectedProduct.pictures);

// Формируем полный список изображений
  const allImages = [
    ...(baseVariantPictures.length ? baseVariantPictures : []),
    ...basePictures.filter(img => img)
  ].filter(Boolean) as string[];

// Определяем текущее изображение
  const currentImage = allImages[currentImageIndex] || '';
  const currentPrice = selectedVariant?.price ?? selectedProduct.price;


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Слайдер изображений */}
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 flex items-center justify-center">
            {currentImage ? (
              <SmartImage
                src={currentImage}
                alt={selectedProduct.name}
                className="w-full h-full object-contain p-4"
              />
            ) : (
              <span className="text-gray-500">Изображение отсутствует</span>
            )}
          </div>

          {allImages.length > 1 && (
            <div className="flex gap-2 overflow-x-auto pb-2">
              {allImages.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`flex-shrink-0 w-16 h-16 bg-gray-100 rounded border-2 ${
                    currentImageIndex === index
                      ? 'border-black'
                      : 'border-transparent hover:border-gray-400'
                  }`}
                >
                  <SmartImage
                    src={img}
                    alt={`${selectedProduct.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Информация о товаре */}
        <div>
          <h1 className="text-4xl mb-2">{selectedProduct.name}</h1>
          <span className="block text-sm mb-4 text-zinc-400">Артикул: {selectedProduct.article}</span>

          {currentPrice != null && (
            <p className="text-3xl mb-6">{currentPrice.toLocaleString('ru-RU')} ₽</p>
          )}

          {selectedProduct.description && (
            <p className="text-gray-700 mb-8 leading-relaxed" dangerouslySetInnerHTML={{
              __html: selectedProduct.description
            }}/>
          )}

          {/* Переключатель товаров в группе */}
          {groupProducts.length > 1 && (
            <div className="mb-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {groupProducts.map((prod) => (
                  <button
                    key={prod.id}
                    onClick={() => {
                      setSelectedProduct(prod);
                      setSelectedVariant(prod.variants.length > 0 ? prod.variants[0] : null);
                    }}
                    className={`p-4 border-2 text-left transition-colors ${
                      selectedProduct.id === prod.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">  {prod.name}</div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Варианты */}
          {selectedProduct.variants && selectedProduct.variants.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg mb-4">Варианты:</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {selectedProduct.variants.map((variant) => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 border-2 text-left transition-colors ${
                      selectedVariant?.id === variant.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="font-medium">{variant.name}</div>
                    {variant.price != null && (
                      <div className="text-sm mt-1">
                        {variant.price.toLocaleString('ru-RU')} ₽
                      </div>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Характеристики (params) */}
          {renderParams(selectedProduct?.params)}

          {/* Кнопка "В корзину" */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
          >
            {addedToCart ? (
              <>
                <Check className="w-6 h-6"/>
                Добавлено в корзину
              </>
            ) : (
              <>
                <ShoppingCart className="w-6 h-6"/>
                Добавить в корзину
              </>
            )}
          </button>

          {/* Статичная информация */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg mb-4">Информация о товаре</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                Гарантия качества
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                Быстрая доставка
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5 flex-shrink-0"/>
                Возврат в течение 14 дней
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
