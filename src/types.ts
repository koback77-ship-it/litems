export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  description: string;
  image: string;
  isBestSeller?: boolean;
  isNew?: boolean;
}

export interface LookbookItem {
  id: string;
  image: string;
  author: string;
  location: string;
  products: string[]; // Product IDs
}

export interface CartItem extends Product {
  quantity: number;
}
