import { useState, useMemo } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate, Navigate } from 'react-router-dom';
import type { Order } from '../types';

const Checkout: React.FC = () => {
  const { cartItems, cartTotal, clearCart, getProductDetails } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    note: '',
  });

  const orderSummaryItems = useMemo(() => {
    return cartItems.map(item => {
      const product = getProductDetails(item.id);
      return { ...product, qty: item.qty };
    });
  }, [cartItems, getProductDetails]);

  if (cartItems.length === 0) {
    return <Navigate to="/" replace />;
  }
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.address || !formData.city || !formData.state || !formData.pincode) {
      alert('Please fill in all required fields.');
      return;
    }

    const newOrder: Order = {
      id: Math.random().toString(36).substring(2, 11).toUpperCase(),
      items: cartItems.map(item => ({ id: item.id, qty: item.qty })),
      total: cartTotal,
      customer: formData,
      createdAt: Date.now(),
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders') || '[]') as Order[];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

    clearCart();

    navigate('/order-success', { state: { orderId: newOrder.id, orderTotal: newOrder.total } });
  };

  const inputClass = "block w-full px-4 py-2 mt-1 text-text-primary bg-surface border border-muted rounded-md focus:border-accent-blue focus:ring focus:ring-accent-blue focus:ring-opacity-50";

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-heading text-center text-text-primary mb-8 font-bold">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Shipping Form */}
        <div className="bg-surface rounded-xl shadow-soft-warm p-6">
          <h2 className="text-2xl font-heading text-text-primary mb-6">Shipping Information</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="text-text-primary">Full Name <span className="text-red-500">*</span></label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label htmlFor="phone" className="text-text-primary">Phone Number <span className="text-red-500">*</span></label>
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} required />
            </div>
            <div>
              <label htmlFor="email" className="text-text-primary">Email Address</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} />
            </div>
            <div>
              <label htmlFor="address" className="text-text-primary">Address <span className="text-red-500">*</span></label>
              <input type="text" id="address" name="address" value={formData.address} onChange={handleChange} className={inputClass} required />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="city" className="text-text-primary">City <span className="text-red-500">*</span></label>
                <input type="text" id="city" name="city" value={formData.city} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label htmlFor="state" className="text-text-primary">State <span className="text-red-500">*</span></label>
                <input type="text" id="state" name="state" value={formData.state} onChange={handleChange} className={inputClass} required />
              </div>
              <div>
                <label htmlFor="pincode" className="text-text-primary">Pincode <span className="text-red-500">*</span></label>
                <input type="text" id="pincode" name="pincode" value={formData.pincode} onChange={handleChange} className={inputClass} required />
              </div>
            </div>
            <div>
              <label htmlFor="note" className="text-text-primary">Order Note (Optional)</label>
              <textarea id="note" name="note" value={formData.note} onChange={handleChange} rows={3} className={inputClass}></textarea>
            </div>
            <button type="submit" className="w-full bg-accent-blue text-white px-8 py-3 rounded-lg text-lg hover:bg-opacity-90 mt-6 transition-transform transform hover:scale-105">
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="bg-surface rounded-xl shadow-soft-warm p-6 h-fit sticky top-24">
          <h2 className="text-2xl font-heading text-text-primary mb-6">Order Summary</h2>
          <div className="space-y-4">
            {orderSummaryItems.map(item => (
              item && <div key={item.id} className="flex items-center justify-between text-text-primary">
                <div className="flex items-center">
                  <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded-md mr-4" />
                  <div>
                    <p className="font-bold">{item.name}</p>
                    <p className="text-sm text-muted">x{item.qty}</p>
                  </div>
                </div>
                <p>₹{(item.price * item.qty).toFixed(2)}</p>
              </div>
            ))}
          </div>
          <div className="border-t border-muted mt-6 pt-4 flex justify-between font-bold text-xl text-text-primary">
            <span>Total:</span>
            <span>₹{cartTotal.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
