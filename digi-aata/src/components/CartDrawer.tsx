import React from 'react';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  return (
    <div className={`fixed inset-0 z-50 bg-black bg-opacity-50 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
      <div className="fixed right-0 top-0 w-80 md:w-96 h-full bg-surface shadow-lg p-6 overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-heading text-text-primary">Your Cart</h2>
          <button onClick={onClose} className="text-muted hover:text-text-primary text-2xl">&times;</button>
        </div>
        <div className="cart-items-list">
          {/* Cart items will go here */}
          <p className="text-muted">Cart is empty.</p>
        </div>
        <div className="mt-8 border-t border-muted pt-4">
          <div className="flex justify-between text-lg font-bold text-text-primary">
            <span>Total:</span>
            <span>₹0.00</span>
          </div>
          <button className="w-full bg-accent-blue text-white py-3 rounded-lg mt-6 hover:bg-opacity-90">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartDrawer;
