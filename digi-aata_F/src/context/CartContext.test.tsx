import { renderHook, act } from '@testing-library/react';
import { CartProvider, useCart } from './CartContext';
import { PRODUCTS } from '../data/products'; // Assuming products are accessible

// Mock localStorage
const localStorageMock = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString();
    },
    removeItem: (key: string) => {
      delete store[key];
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock,
});

describe('CartContext', () => {
  beforeEach(() => {
    localStorageMock.clear();
    // Ensure PRODUCTS is available for testing, or mock it
    // For this test, we assume PRODUCTS is correctly imported and available
  });

  it('should initialize with an empty cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });
    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartTotal).toBe(0);
    expect(result.current.cartCount).toBe(0);
  });

  it('should add items to the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
    });

    expect(result.current.cartItems).toEqual([{ id: PRODUCTS[0].id, qty: 1 }]);
    expect(result.current.cartCount).toBe(1);
    expect(result.current.cartTotal).toBe(PRODUCTS[0].price);
  });

  it('should increment quantity if item already exists', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
      result.current.addToCart(PRODUCTS[0].id, 2);
    });

    expect(result.current.cartItems).toEqual([{ id: PRODUCTS[0].id, qty: 3 }]);
    expect(result.current.cartCount).toBe(3);
    expect(result.current.cartTotal).toBe(PRODUCTS[0].price * 3);
  });

  it('should remove items from the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
      result.current.removeFromCart(PRODUCTS[0].id);
    });

    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartCount).toBe(0);
    expect(result.current.cartTotal).toBe(0);
  });

  it('should update item quantity', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
      result.current.updateQty(PRODUCTS[0].id, 3);
    });

    expect(result.current.cartItems).toEqual([{ id: PRODUCTS[0].id, qty: 3 }]);
    expect(result.current.cartCount).toBe(3);
    expect(result.current.cartTotal).toBe(PRODUCTS[0].price * 3);
  });

  it('should remove item if quantity is updated to 0 or less', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
      result.current.updateQty(PRODUCTS[0].id, 0);
    });

    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartCount).toBe(0);
    expect(result.current.cartTotal).toBe(0);
  });

  it('should clear the cart', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
      result.current.addToCart(PRODUCTS[1].id, 2);
      result.current.clearCart();
    });

    expect(result.current.cartItems).toEqual([]);
    expect(result.current.cartCount).toBe(0);
    expect(result.current.cartTotal).toBe(0);
  });

  it('should persist cart to localStorage', () => {
    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    act(() => {
      result.current.addToCart(PRODUCTS[0].id, 1);
    });

    expect(localStorageMock.getItem('cartItems')).toEqual(JSON.stringify([{ id: PRODUCTS[0].id, qty: 1 }]));
  });

  it('should load cart from localStorage on initialization', () => {
    localStorageMock.setItem('cartItems', JSON.stringify([{ id: PRODUCTS[1].id, qty: 2 }]));

    const { result } = renderHook(() => useCart(), { wrapper: CartProvider });

    expect(result.current.cartItems).toEqual([{ id: PRODUCTS[1].id, qty: 2 }]);
    expect(result.current.cartCount).toBe(2);
    expect(result.current.cartTotal).toBe(PRODUCTS[1].price * 2);
  });
});
