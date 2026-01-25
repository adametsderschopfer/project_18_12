export interface IOasisCategories {
    response: {
        item: IOasisCategory[]
    }
}

export interface IOasisProducts {
    yml_catalog: {
        shop: [
            {
                offers: [{
                    offer: IOasisProduct[]
                }]
            }
        ]
    }
}

export interface IOasisProduct {
  $: { id: string; available: 'true' | 'false' };
  url: string[];
  currencyId: string[];
  shortName: string[];
  name: string[];
  vendor: string[];
  vendorCode: string[];
  price: string[];
  categoryId: string[];
  picture: string[];
  description: string[];
  param: IOasisParam[];
  includedBranding: IOasisIncludedBranding[] | [''];
  dealerPrice: string[];
  fullCategories: string[];
  rating: string[];
  outlets: IOasisOutlet[] | [''];
  // Новые поля
  parentColorId?: string[];
  parentSizeId?: string[];
  size?: string[];
  discountGroupId?: string[];
  colors?: { _: string; $: { pantone?: string } }[];
  brandId?: string[];
  materials?: string[];
  branding?: string[];
  cdr?: string[];
  groupId?: string[];
  videoId?: string[];
  package?: IOasisPackage[];
  colorGroupId?: string[];
  parentVolumeId?: string[];
  parentGenderId?: string[];
  isOnOrder?: string[];
  isHigh?: string[];
  sizeSort?: string[];
  parentId?: string[];
  brandingOption?: string[];
  articleBase?: string[];
  isVip?: string[];
  isStopped?: string[];
  mainCategory?: string[];
  videos?: { video: string[] }[];
  stockSum?: string[];
  categoriesArray?: string[];
  stockMsk?: string[];
  updatedAt?: string[];
  isDeleted?: string[];
  deliveryDays?: string[];
  lead?: string[];
  fileIds?: string[];
  defect?: string[];
  priceInc?: string[];
  priceRub?: string[];
  warehouseDelivery?: {
    paymentDate: string[];
    warehouseId: string[];
    deliveryDate: string[];
  }[];
  isSet?: string[];
  supplyTerms?: string[];
  totalReserve?: string[];
  brandingImages?: string[];
  sets?: string[];
  sizesImg?: string[];
  imagesUpdatedAt?: string[];
  attributesUpdatedAt?: string[];
}

export interface IOasisParam {
  _: string;
  $: {
    name: string;
    unit?: string;
  };
}

export interface IOasisIncludedBranding {
  id: string[];
  name: string[];
  size: string[];
  place: string[];
  setup: string[];
  isLocked: string[];
}

export interface IOasisOutlet {
  outlet: IOasisOutletDetail[];
}

export interface IOasisOutletDetail {
  $: {
    id: string;
    instock: string;
  };
}

export interface IOasisPackage {
  _?: string;
  $: {
    id: string;
    isMain: '0' | '1';
    description: string;
    text: string;
    size: string;
    weight: string;
    amount: string;
    volume: string;
  };
}

export interface IOasisCategory {
    id: string[],
    parent_id: string[],
    root: string[],
    lft: string[],
    rgt: string[],
    level: string[],
    slug: string[],
    name: string[],
    path: string[],
    sort: string[],
    ltree_path: string[],
    ltree: string[],
}
