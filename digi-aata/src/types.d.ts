// src/types.d.ts
declare module '*.svg' {
    import React = require('react');
    export const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}

export type CartItem = {
  id: string;
  qty: number;
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
