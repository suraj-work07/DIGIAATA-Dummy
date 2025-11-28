import { Link, useLocation } from 'react-router-dom';

const OrderSuccess: React.FC = () => {
  const location = useLocation();
  const { orderId, orderTotal } = location.state || {};

  return (
    <div className="container mx-auto py-16 text-center text-text-primary">
      <h1 className="text-4xl font-heading mb-4 text-accent-green">Order Placed Successfully!</h1>
      <p className="text-lg text-muted mb-8">Thank you for your purchase.</p>
      
      {orderId && orderTotal && (
        <div className="bg-surface rounded-xl shadow-soft-warm p-6 max-w-md mx-auto mb-8">
          <h2 className="text-2xl font-heading mb-4">Your Order Details</h2>
          <p className="mb-2"><strong>Order ID:</strong> {orderId}</p>
          <p><strong>Total:</strong> ₹{orderTotal.toFixed(2)}</p>
        </div>
      )}
      
      <Link to="/products" className="mt-6 inline-block bg-accent-blue text-white px-8 py-3 rounded-lg hover:bg-opacity-90 transition-transform transform hover:scale-105">
        Continue Shopping
      </Link>
    </div>
  );
};

export default OrderSuccess;
