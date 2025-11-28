import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';
import { PRODUCTS } from '../data/products';
import type { Product } from '../data/products';
import type { CartItem } from '../types';

interface CartContextType {
  cartItems: CartItem[];
  cartTotal: number;
  cartCount: number;
  addToCart: (productId: string, qty: number) => void;
  removeFromCart: (productId: string) => void;
  updateQty: (productId: string, qty: number) => void;
  clearCart: () => void;
  getCartItem: (productId: string) => CartItem | undefined;
  getProductDetails: (productId: string) => Product | undefined;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [storedCartItems, setStoredCartItems] = useLocalStorage<CartItem[]>('cartItems', []);
  const [cartItems, setCartItems] = useState<CartItem[]>(storedCartItems);

  useEffect(() => {
    setCartItems(storedCartItems);
  }, [storedCartItems]);

  const getProductDetails = useCallback((productId: string): Product | undefined => {
    return PRODUCTS.find(product => product.id === productId);
  }, []);

  const calculateCartTotals = useCallback((items: CartItem[]) => {
    let total = 0;
    let count = 0;
    items.forEach(item => {
      const product = getProductDetails(item.id);
      if (product) {
        total += product.price * item.qty;
        count += item.qty;
      }
    });
    return { total, count };
  }, [getProductDetails]);

  const { total: cartTotal, count: cartCount } = calculateCartTotals(cartItems);

  const addToCart = (productId: string, qty: number) => {
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === productId);
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].qty += qty;
        setStoredCartItems(newItems);
        return newItems;
      } else {
        const newItems = [...prevItems, { id: productId, qty }];
        setStoredCartItems(newItems);
        return newItems;
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems(prevItems => {
      const newItems = prevItems.filter(item => item.id !== productId);
      setStoredCartItems(newItems);
      return newItems;
    });
  };

  const updateQty = (productId: string, qty: number) => {
    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }
    setCartItems(prevItems => {
      const existingItemIndex = prevItems.findIndex(item => item.id === productId);
      if (existingItemIndex > -1) {
        const newItems = [...prevItems];
        newItems[existingItemIndex].qty = qty;
        setStoredCartItems(newItems);
        return newItems;
      }
      return prevItems;
    });
  };

  const clearCart = () => {
    setCartItems([]);
    setStoredCartItems([]);
  };

  const getCartItem = (productId: string) => {
    return cartItems.find(item => item.id === productId);
  };

  const contextValue = {
    cartItems,
    cartTotal,
    cartCount,
    addToCart,
    removeFromCart,
    updateQty,
    clearCart,
    getCartItem,
    getProductDetails,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
