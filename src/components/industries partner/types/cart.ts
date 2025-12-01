// app/cart/types.ts

export type CartProduct = {
  id: number;
  name: string;
  description: string;
  color: string;
  price: number;
  imageUrl: string;
};

export type CartLine = CartProduct & {
  quantity: number;
};
