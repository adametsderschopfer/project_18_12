'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { IProduct } from '../types'; // Убедитесь, что путь корректен

// Получение количества товаров в корзине
const getCartItemsCount = (): number => {
  if (typeof window === 'undefined') return 0;
  const storedCart = localStorage.getItem('cart');
  if (!storedCart) return 0;
  try {
    const items: IProduct[] = JSON.parse(storedCart);
    return items.length;
  } catch {
    return 0;
  }
};

export default function Header() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    setCartCount(getCartItemsCount());

    const handleStorageChange = () => {
      setCartCount(getCartItemsCount());
    };

    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setIsMobileMenuOpen(false);
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Все пункты навигации (для десктопа — только основные)
  const desktopNavItems = [
    { href: '/catalog', label: 'Каталог' },
    { href: '/about', label: 'О нас' },
  ];

  // Все пункты для мобильного меню
  const mobileNavItems = [
    { href: '/catalog', label: 'Каталог' },
    { href: '/branding', label: 'Брендирование мероприятий' },
    { href: '/printing', label: 'Полиграфия / Типография' },
    { href: '/printing-types', label: 'Виды нанесений' },
    { href: '/portfolio', label: 'Портфолио' },
    { href: '/contacts', label: 'Контакты / Реквизиты' },
    { href: '/delivery', label: 'Доставка и оплата' },
    { href: '/about', label: 'О нас' },
  ];

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        {/* Desktop Header */}
        <div className="hidden lg:flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl tracking-tight font-bold">
            Проект 18.12
          </Link>

          <form onSubmit={handleSearch} className="flex-1 max-w-md">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Поиск товаров..."
                className="w-full px-4 py-2 pl-10 bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            </div>
          </form>

          <nav className="flex items-center gap-6">
            {desktopNavItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-gray-300 transition-colors ${
                  pathname === item.href ? 'text-gray-300' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/checkout"
              className="relative hover:text-gray-300 transition-colors"
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartCount}
                </span>
              )}
            </Link>
          </nav>
        </div>

        {/* Mobile Header */}
        <div className="lg:hidden">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-xl tracking-tight font-bold">
              Проект 18.12
            </Link>

            <div className="flex items-center gap-4">
              <Link
                href="/checkout"
                className="relative hover:text-gray-300 transition-colors"
                onClick={closeMobileMenu}
              >
                <ShoppingCart className="w-6 h-6" />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </Link>

              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="hover:text-gray-300 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="mt-4 pb-4 border-t border-gray-800 pt-4">
              <form onSubmit={handleSearch} className="mb-4">
                <div className="relative">
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Поиск товаров..."
                    className="w-full px-4 py-2 pl-10 bg-white text-black border border-gray-300 focus:outline-none focus:border-black"
                  />
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                </div>
              </form>

              <nav className="flex flex-col space-y-3">
                {mobileNavItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`py-2 hover:text-gray-300 transition-colors ${
                      pathname === item.href ? 'text-gray-300' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
