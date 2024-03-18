export interface CartProduct {
  orderName: string;
  orderQuantity: number;
  price: number;
}

export interface IOrderProduct {
  name?: string;
  phone: string;
  address: string;
  comment?: string;
  fullPrice: number;
  products: CartProduct[];
}
