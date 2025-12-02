import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import type { ReactNode } from 'react';
import type { Product, CartItem } from '../types.d.ts';

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
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [token, setToken] = useState<string | null>(localStorage.getItem('token'));

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8000/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data: Product[] = await response.json();
        setProducts(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const fetchCartItems = async () => {
      if (token) {
        try {
          const response = await fetch('http://localhost:8000/api/cart/', {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          if (response.ok) {
            const data = await response.json();
            setCartItems(data);
          }
        } catch (error) {
          console.error('Failed to fetch cart items', error);
        }
      }
    };
    fetchCartItems();
  }, [token]);

  const getProductDetails = useCallback((productId: string): Product | undefined => {
    return products.find(product => String(product.id) === productId);
  }, [products]);

  const calculateCartTotals = useCallback((items: CartItem[]) => {
    let total = 0;
    let count = 0;
    items.forEach(item => {
      const product = getProductDetails(String(item.product_id));
      if (product) {
        total += product.price * item.quantity;
        count += item.quantity;
      }
    });
    return { total, count };
  }, [getProductDetails]);

  const { total: cartTotal, count: cartCount } = calculateCartTotals(cartItems);

  const addToCart = async (productId: string, qty: number) => {
    if (!token) return;
    try {
      const response = await fetch('http://localhost:8000/api/cart/items', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ product_id: productId, quantity: qty }),
      });
      if (response.ok) {
        const newItem = await response.json();
        setCartItems(prevItems => {
          const existingItem = prevItems.find(item => item.product_id === newItem.product_id);
          if (existingItem) {
            return prevItems.map(item =>
              item.product_id === newItem.product_id ? { ...item, quantity: item.quantity + qty } : item
            );
          }
          return [...prevItems, newItem];
        });
      }
    } catch (error) {
      console.error('Failed to add to cart', error);
    }
  };

  const removeFromCart = async (productId: string) => {
    if (!token) return;
    const itemToRemove = cartItems.find(item => String(item.product_id) === productId);
    if (!itemToRemove) return;

    try {
      const response = await fetch(`http://localhost:8000/api/cart/items/${itemToRemove.id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.ok) {
        setCartItems(prevItems => prevItems.filter(item => String(item.product_id) !== productId));
      }
    } catch (error) {
      console.error('Failed to remove from cart', error);
    }
  };

  const updateQty = async (productId: string, qty: number) => {
    if (!token) return;
    const itemToUpdate = cartItems.find(item => String(item.product_id) === productId);
    if (!itemToUpdate) return;

    if (qty <= 0) {
      removeFromCart(productId);
      return;
    }

    try {
      const response = await fetch(`http://localhost:8000/api/cart/items/${itemToUpdate.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ quantity: qty }),
      });
      if (response.ok) {
        const updatedItem = await response.json();
        setCartItems(prevItems =>
          prevItems.map(item => (String(item.product_id) === productId ? updatedItem : item))
        );
      }
    } catch (error) {
      console.error('Failed to update quantity', error);
    }
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartItem = (productId: string) => {
    return cartItems.find(item => String(item.product_id) === productId);
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
