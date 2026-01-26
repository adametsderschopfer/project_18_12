'use client';

import { useState, useEffect, useTransition } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { ShoppingBag, Trash2, Check, X, ArrowRight } from 'lucide-react';
import { IProduct } from '../../types';
import {
  getCartItems,
  removeFromCart as removeItemFromCart,
  clearCart,
} from '@/lib/cart';

// Схема для оформления
const formSchema = z.object({
  name: z.string().min(2, { message: 'Имя должно содержать не менее 2 символов.' }),
  email: z.string().email({ message: 'Введите корректный email адрес.' }),
  phone: z.string().min(10, { message: 'Введите корректный номер телефона.' }),
  address: z.string().min(5, { message: 'Введите корректный адрес доставки.' }),
});

type FormData = z.infer<typeof formSchema>;

export default function CartPage() {
  const [cartItems, setCartItems] = useState<IProduct[]>([]);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [orderPlaced, setOrderPlaced] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const totalAmount = cartItems.reduce((sum, item) => sum + (item.price || 0), 0);

  const handleRemove = (productId: string) => {
    removeItemFromCart(productId);
    setCartItems(getCartItems());
  };

  const handleCheckout = () => {
    if (cartItems.length > 0) {
      setIsCheckout(true);
    }
  };

  const onSubmit = (data: FormData) => {
    setError(null);
    startTransition(async () => {
      try {
        const orderData = {
          ...data,
          items: cartItems.map((item) => ({
            productId: item.id,
            name: item.name,
            price: item.price || 0,
            article: item.article,
            sourceName: item.sourceName,
          })),
          total: totalAmount,
        };

        const response = await fetch('/api/order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderData),
        });

        if (response.ok) {
          clearCart();
          setOrderPlaced(true);
        } else {
          setError('Не удалось отправить заказ. Попробуйте позже.');
        }
      } catch (err) {
        console.error('Order error:', err);
        setError('Произошла ошибка при отправке заказа.');
      }
    });
  };

  // === Экран успешного заказа ===
  if (orderPlaced) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto text-center">
          <div className="w-20 h-20 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-12 h-12" />
          </div>
          <h1 className="text-4xl mb-4">Заказ оформлен!</h1>
          <p className="text-gray-600 mb-8">
            Мы свяжемся с вами в ближайшее время для подтверждения заказа.
          </p>
          <Link
            href="/"
            className="bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors inline-block"
          >
            Вернуться на главную
          </Link>
        </div>
      </div>
    );
  }

  // === Экран оформления заказа ===
  if (isCheckout) {
    return (
      <div className="container mx-auto px-4 py-8">
        <button
          type="button"
          onClick={() => setIsCheckout(false)}
          className="inline-flex items-center gap-2 mb-6 text-gray-600 hover:text-black"
        >
          <ArrowRight className="w-4 h-4 rotate-180" />
          Назад к корзине
        </button>

        <h1 className="text-4xl mb-8">Оформление заказа</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Форма */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="bg-white border border-gray-200 p-6">
                <h2 className="text-2xl mb-6">Контактная информация</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block mb-2">Имя *</label>
                    <input
                      type="text"
                      {...register('name')}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Email *</label>
                    <input
                      type="email"
                      {...register('email')}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    />
                    {errors.email && (
                      <p className="text-red-600 text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Телефон *</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    />
                    {errors.phone && (
                      <p className="text-red-600 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block mb-2">Адрес доставки *</label>
                    <textarea
                      {...register('address')}
                      rows={3}
                      className="w-full px-4 py-2 border border-gray-300 focus:outline-none focus:border-black"
                    />
                    {errors.address && (
                      <p className="text-red-600 text-sm mt-1">{errors.address.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 text-red-700 rounded">
                  <X className="w-5 h-5" />
                  {error}
                </div>
              )}

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-black text-white px-8 py-4 text-lg hover:bg-gray-800 transition-colors disabled:opacity-70"
              >
                {isPending ? 'Отправка...' : 'Подтвердить заказ'}
              </button>
            </form>
          </div>

          {/* Сводка */}
          <div>
            <div className="bg-white border border-gray-200 p-6 sticky top-4">
              <h2 className="text-2xl mb-6">Ваш заказ</h2>
              <div className="space-y-4 mb-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm">
                    <span>{item.name}</span>
                    <span>{(item.price || 0).toLocaleString('ru-RU')} ₽</span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Товары:</span>
                  <span>{totalAmount.toLocaleString('ru-RU')} ₽</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Доставка:</span>
                  <span>Бесплатно</span>
                </div>
                <div className="flex justify-between text-xl pt-2 border-t border-gray-200">
                  <span>Итого:</span>
                  <span>{totalAmount.toLocaleString('ru-RU')} ₽</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // === Экран корзины ===
  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="w-24 h-24 mx-auto mb-6 text-gray-300" />
          <h1 className="text-3xl mb-4">Корзина пуста</h1>
          <p className="text-gray-600 mb-8">
            Добавьте товары в корзину, чтобы оформить заказ
          </p>
          <Link
            href="/catalog"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 hover:bg-gray-800 transition-colors"
          >
            Перейти в каталог
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl mb-8">Корзина</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Товары */}
        <div className="lg:col-span-2 space-y-4">
          {cartItems.map((item) => {
            // Парсим изображение
            let imageUrl = '';
            if (typeof item.pictures === 'string') {
              try {
                const pics = JSON.parse(item.pictures);
                if (Array.isArray(pics) && pics.length > 0) {
                  imageUrl = pics[0];
                }
              } catch (e) {
                /* ignore */
              }
            } else if (Array.isArray(item.pictures) && item.pictures.length > 0) {
              imageUrl = item.pictures[0];
            }

            return (
              <div
                key={item.id}
                className="flex gap-4 bg-white border border-gray-200 p-4"
              >
                {imageUrl ? (
                  <img
                    src={imageUrl}
                    alt={item.name}
                    className="w-24 h-24 object-cover bg-gray-100"
                  />
                ) : (
                  <div className="w-24 h-24 bg-gray-100 flex items-center justify-center text-gray-400">
                    Нет фото
                  </div>
                )}
                <div className="flex-1">
                  <h3 className="text-lg mb-2">{item.name}</h3>
                  <p className="text-xl">{(item.price || 0).toLocaleString('ru-RU')} ₽</p>
                </div>
                <div className="flex flex-col items-end justify-between">
                  <button
                    onClick={() => handleRemove(item.id)}
                    className="text-gray-400 hover:text-black transition-colors"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                  <p className="text-xl">{(item.price || 0).toLocaleString('ru-RU')} ₽</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Итог */}
        <div>
          <div className="bg-white border border-gray-200 p-6 sticky top-4">
            <h2 className="text-2xl mb-6">Итого</h2>
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-gray-600">Товары:</span>
                <span>{totalAmount.toLocaleString('ru-RU')} ₽</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Доставка:</span>
                <span>Бесплатно</span>
              </div>
              <div className="border-t border-gray-200 pt-3 flex justify-between text-xl">
                <span>Всего:</span>
                <span>{totalAmount.toLocaleString('ru-RU')} ₽</span>
              </div>
            </div>
            <button
              onClick={handleCheckout}
              className="w-full bg-black text-white text-center px-8 py-3 hover:bg-gray-800 transition-colors"
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
