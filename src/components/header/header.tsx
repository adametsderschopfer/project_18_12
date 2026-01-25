'use client';

import React, {useState} from 'react';
import Link from 'next/link';
import {useRouter} from "next/navigation";
import {Search, ShoppingCart} from "lucide-react";


const Header = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.replace(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <header className="bg-black text-white border-b border-gray-800">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="text-2xl tracking-tight">
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
            <Link href="/" className="hover:text-gray-300 transition-colors">
              Главная
            </Link>
            <Link href="/catalog" className="hover:text-gray-300 transition-colors">
              Каталог
            </Link>
            <Link href="/about" className="hover:text-gray-300 transition-colors">
              О нас
            </Link>
            <Link href="/checkout" className="relative hover:text-gray-300 transition-colors">
              <ShoppingCart className="w-6 h-6" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
