import {Prisma, Product} from "@/prisma/generated";
import ProductVariantCreateManyInput = Prisma.ProductVariantCreateManyInput;
import ProductCreateManyInput = Prisma.ProductCreateManyInput;

export type ProceedProductsData = {
  products: ProductCreateManyInput[]
  variants: ProductVariantCreateManyInput[]
}

export enum EDataSourceName {
  Gifts = 'Gifts',
  HappyGifts = 'HappyGifts',
  Oasis = 'Oasis'
}

export interface ICategory {
  id: string;
  name: string;
  level: number;
  parentId?: string | null;
  sourceName: EDataSourceName
}

export type MergeRule = {
  targetName: string;
  aliases: string[];
  createIfNotExists?: boolean;
};

export type Param = {
  label: string; value: string; code: string;
}


export interface IProduct {
  id: string
  name: string
  brand?: string | null;
  article?: string | null;
  description?: string | null
  price?: number | null
  sourceName: EDataSourceName
  categoryId?: string | null
  pictures?: string // тут json массив {url: string}[]
}
