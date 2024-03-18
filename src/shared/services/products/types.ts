import type { IProduct } from '@/shared/services/products/models';

export interface GetProductsByCategoryResponse {
  result: IProduct[];
  totalCount: number;
}

export interface GetProductsByCategoryInput {
  id: string;
  count?: number;
  offset?: number;
}
