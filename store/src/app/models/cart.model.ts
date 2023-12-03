import { ProductClass } from "./product.model";

export interface Cart {
  items: Array<CartItem>;
}

export interface CartItem {
  product: ProductClass;
  quantity: number;
}