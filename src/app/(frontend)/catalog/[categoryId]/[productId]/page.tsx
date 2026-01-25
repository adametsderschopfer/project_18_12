'use client'

import Link from "next/link";
import {useParams} from "next/navigation";
import {useState} from "react";
import {ArrowLeft, Check, ShoppingCart} from "lucide-react";

export const products = [
  {
    id: '1',
    name: 'iPhone 14 Pro',
    description: 'Флагманский смартфон от Apple с передовыми технологиями',
    price: 89990,
    image: 'https://images.unsplash.com/photo-1678685888221-cda773a3dcdb?w=400&h=400&fit=crop',
    categoryId: '2',
    variants: [
      { id: 'v1', name: '128GB Черный', price: 89990 },
      { id: 'v2', name: '256GB Черный', price: 99990 },
      { id: 'v3', name: '512GB Черный', price: 109990 },
    ],
  },
  {
    id: '2',
    name: 'Samsung Galaxy S23',
    description: 'Мощный Android смартфон с отличной камерой',
    price: 74990,
    image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=400&h=400&fit=crop',
    categoryId: '2',
    variants: [
      { id: 'v4', name: '128GB Белый', price: 74990 },
      { id: 'v5', name: '256GB Белый', price: 84990 },
    ],
  },
  {
    id: '3',
    name: 'MacBook Pro 14"',
    description: 'Профессиональный ноутбук для работы и творчества',
    price: 169990,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    categoryId: '3',
  },
  {
    id: '106083-gifts',
    name: 'Dell XPS 13',
    description: 'Компактный и мощный ультрабук',
    price: 119990,
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&h=400&fit=crop',
    categoryId: '3',
  },
  {
    id: '5',
    name: 'Мужская куртка',
    description: 'Стильная куртка для холодной погоды',
    price: 5990,
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    categoryId: '5',
    variants: [
      { id: 'v6', name: 'Размер M', price: 5990 },
      { id: 'v7', name: 'Размер L', price: 5990 },
      { id: 'v8', name: 'Размер XL', price: 6490 },
    ],
  },
  {
    id: '6',
    name: 'Женское платье',
    description: 'Элегантное платье для особых случаев',
    price: 7990,
    image: 'https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&h=400&fit=crop',
    categoryId: '6',
  },
  {
    id: '7',
    name: 'Диван угловой',
    description: 'Комфортный диван для гостиной',
    price: 45990,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop',
    categoryId: '8',
  },
  {
    id: '8',
    name: 'Настенное зеркало',
    description: 'Декоративное зеркало в минималистичном стиле',
    price: 3990,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=400&h=400&fit=crop',
    categoryId: '9',
  },
];

// Функция для получения товара по ID
export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};


const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const product = productId ? getProductById(productId) : undefined;
  const [selectedVariant, setSelectedVariant] = useState<'ProductVariant' | undefined>(
    product?.variants?.[0]
  );
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl">Товар не найден</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    // addToCart(product, selectedVariant);
    setAddedToCart(true);
    setTimeout(() => setAddedToCart(false), 2000);
  };

  const currentPrice = selectedVariant?.price || product.price;

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        href="/catalog"
        className="inline-flex items-center gap-2 mb-6 hover:text-gray-600 transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Назад к каталогу
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Image */}
        <div className="aspect-square bg-gray-100">
          <img
            src={selectedVariant?.image || product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Info */}
        <div>
          <h1 className="text-4xl mb-4">{product.name}</h1>
          <p className="text-3xl mb-6">{currentPrice.toLocaleString('ru-RU')} ₽</p>
          <p className="text-gray-700 mb-8 leading-relaxed">{product.description}</p>

          {/* Variants */}
          {product.variants && product.variants.length > 0 && (
            <div className="mb-8">
              <h3 className="text-lg mb-4">Выберите вариант:</h3>
              <div className="grid grid-cols-2 gap-3">
                {product.variants.map(variant => (
                  <button
                    key={variant.id}
                    onClick={() => setSelectedVariant(variant)}
                    className={`p-4 border-2 transition-colors text-left ${
                      selectedVariant?.id === variant.id
                        ? 'border-black bg-black text-white'
                        : 'border-gray-200 hover:border-gray-400'
                    }`}
                  >
                    <div className="mb-1">{variant.name}</div>
                    <div className="text-sm">
                      {variant.price.toLocaleString('ru-RU')} ₽
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Add to Cart */}
          <button
            onClick={handleAddToCart}
            className="w-full bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors flex items-center justify-center gap-3"
          >
            {addedToCart ? (
              <>
                <Check className="w-6 h-6" />
                Добавлено в корзину
              </>
            ) : (
              <>
                <ShoppingCart className="w-6 h-6" />
                Добавить в корзину
              </>
            )}
          </button>

          {/* Features */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <h3 className="text-lg mb-4">Информация о товаре</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5" />
                Гарантия качества
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5" />
                Быстрая доставка
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-5 h-5 mt-0.5" />
                Возврат в течение 14 дней
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

}

export default ProductDetail;
