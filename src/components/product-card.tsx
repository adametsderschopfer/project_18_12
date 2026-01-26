'use client';

import React, {useState, useEffect} from 'react';
import {addToCart, getCartItems} from '@/lib/cart';
import {IProduct} from "../../types";
import {formatRubCurrency} from "@/lib/format";
import {parseProductPictures} from "@/lib/product";
import {usePathname} from "next/dist/client/components/navigation";
import Link from "next/link";
import {ShoppingCart} from "lucide-react";


interface ProductCardProps {
  product: IProduct;
}

const ProductCard: React.FC<ProductCardProps> = ({product}) => {
  const pathname = usePathname();

  const [isInCart, setIsInCart] = useState<boolean>(false);

  useEffect(() => {
    const cartItems = getCartItems();
    const isProductInCart = cartItems.some((item: IProduct) => item.id === product.id);
    setIsInCart(isProductInCart);
  }, [product.id]);

  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product as IProduct);
      setIsInCart(true);
    }
  };

  let imageUrl = '/image/image-placeholder.webp';
  if (product.pictures) {
    const pics = parseProductPictures(product.pictures);
    if (pics.length > 0) {
      imageUrl = pics[0];
    }
  }

  return (
    <Link
      href={`${pathname}/${product.id}`}
      className="group border border-gray-200 hover:border-black transition-colors bg-white"
    >
      <div className="aspect-square overflow-hidden bg-gray-100">
        <img
          src={imageUrl}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg mb-2 h-[56px] line-clamp-2">{product.name}</h3>
        <p className="text-sm text-gray-600 mb-4 h-[40px] line-clamp-2" dangerouslySetInnerHTML={{
          __html: product.description
        }} />
        <div className="flex items-center justify-between">
          <span className="text-xl">    {product.price !== null && product.price !== undefined ? (
            formatRubCurrency(product.price)
          ) : (
            'Цена не указана'
          )}</span>
          <button
            onClick={handleAddToCart}
            className="bg-black text-white px-4 py-2 hover:bg-gray-800 transition-colors flex items-center gap-2"
          >
            <ShoppingCart className="w-4 h-4"/>
            <span>В корзину</span>
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
