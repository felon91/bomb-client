import type { ICategories } from '@/shared/services/product-categories/models';

export interface IProduct {
  _id: string;
  title: string;
  link: string;
  description?: string;
  imagePath: string;
  video?: string;
  category: ICategories;
  hit: boolean;
  price: string;
  oldPrice?: string;
  shots?: string;
  shotHeight?: string;
  caliber?: string;
  time?: string;
  amount?: string;
  published: boolean;
}
