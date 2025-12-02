import { useCart } from '../context/CartContext';
import CartItem from '../components/CartItem';
import { Link } from 'react-router-dom';

const CartPage: React.FC = () => {
  const { cartItems, cartTotal, removeFromCart, updateQty, getProductDetails, clearCart } = useCart();

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-16 text-center text-text-primary">
        <h1 className="text-3xl font-heading mb-4">Your Cart is Empty</h1>
        <p className="text-lg text-muted mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="mt-6 inline-block bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
          Start Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-heading text-center text-text-primary mb-8 font-bold">Your Shopping Cart</h1>
      <div className="bg-surface rounded-xl shadow-soft-warm p-6">
        <div className="space-y-4">
          {cartItems.map(item => {
            const product = getProductDetails(String(item.product_id));
            return product ? (
              <CartItem
                key={item.product_id}
                item={item}
                product={product}
                onRemove={removeFromCart}
                onUpdateQty={updateQty}
              />
            ) : null;
          })}
        </div>

        <div className="mt-8 border-t border-gray-200 pt-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-xl font-heading text-text-primary">Total:</h3>
            <span className="text-2xl font-bold text-accent-orange">₹{cartTotal.toFixed(2)}</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Link to="/products" className="text-accent-blue hover:underline">
              &larr; Continue Shopping
            </Link>
            <button 
              onClick={() => window.confirm('Are you sure you want to clear the cart?') && clearCart()}
              className="text-sm text-red-500 hover:underline"
            >
              Clear Cart
            </button>
            <Link to="/checkout" className="w-full md:w-auto bg-accent-green text-white text-center px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
