// src/types.d.ts
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

export type CartItem = {
  id: number;
  product_id: number;
  quantity: number;
  product: Product;
};

export type Order = {
  id: string;
  items: CartItem[];
  total: number;
  customer: {
    name: string;
    phone: string;
    email?: string;
    address: string;
    city: string;
    state: string;
    pincode: string;
    note?: string;
  };
  createdAt: number; // timestamp
};

export interface Category {
  id: number;
  name: string;
  description?: string;
  slug: string;
  image_url?: string;
  created_at: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  price: number;
  category_id: number;
  age_group?: string;
  stock_quantity: number;
  image_url?: string;
  is_active: boolean;
  created_at: string;
  category?: Category;
}

export interface User {
  id: number;
  email: string;
  full_name: string;
  phone: string;
}
