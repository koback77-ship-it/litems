import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartProps {
  onNavigate: (page: string) => void;
}

const Cart: React.FC<CartProps> = ({ onNavigate }) => {
  const { cart, updateQuantity, removeFromCart, totalPrice, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      clearCart();
      alert('주문이 완료되었습니다. 감사합니다!');
      onNavigate('home');
    }, 2000);
  };

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-32 text-center space-y-8">
        <div className="w-20 h-20 bg-beige/10 rounded-full flex items-center justify-center mx-auto">
          <ShoppingBag className="w-10 h-10 text-charcoal/20" />
        </div>
        <div className="space-y-2">
          <h1 className="text-3xl font-serif">Your cart is empty</h1>
          <p className="text-charcoal/40 text-sm uppercase tracking-widest">Discover something special for your space</p>
        </div>
        <button
          onClick={() => onNavigate('store')}
          className="bg-sage text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-charcoal transition-colors shadow-lg"
        >
          Go to Store
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <h1 className="text-4xl font-serif">Shopping Bag</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-8">
          <AnimatePresence mode="popLayout">
            {cart.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                className="flex gap-6 pb-8 border-b border-charcoal/10"
              >
                <div className="w-24 h-32 sm:w-32 sm:h-40 bg-beige/10 rounded-lg overflow-hidden flex-shrink-0">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="flex-grow flex flex-col justify-between py-2">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-lg font-medium">{item.name}</h3>
                      <p className="text-xs text-charcoal/40 uppercase tracking-widest">{item.category}</p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-charcoal/20 hover:text-red-400 transition-colors"
                    >
                      <Trash2 className="w-5 h-5 stroke-[1.5]" />
                    </button>
                  </div>

                  <div className="flex justify-between items-end">
                    <div className="flex items-center border border-charcoal/10 rounded-full px-3 py-1 gap-4">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="text-charcoal/40 hover:text-charcoal transition-colors"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="text-sm font-medium w-4 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="text-charcoal/40 hover:text-charcoal transition-colors"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>
                    <span className="text-lg font-serif">₩{(item.price * item.quantity).toLocaleString()}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-charcoal/5 space-y-8 sticky top-32">
            <h2 className="text-xl font-serif">Order Summary</h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-charcoal/60">
                <span>Subtotal</span>
                <span>₩{totalPrice.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-charcoal/60">
                <span>Shipping</span>
                <span>₩0</span>
              </div>
              <div className="pt-4 border-t border-charcoal/10 flex justify-between text-lg font-serif">
                <span>Total</span>
                <span>₩{totalPrice.toLocaleString()}</span>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isCheckingOut}
              className="w-full bg-sage text-white py-4 rounded-full text-sm uppercase tracking-widest hover:bg-charcoal transition-all duration-300 shadow-lg flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isCheckingOut ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                  className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                />
              ) : (
                <>
                  <span>Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>

            <p className="text-[10px] text-center text-charcoal/40 uppercase tracking-widest">
              Free shipping on all orders over ₩100,000
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
