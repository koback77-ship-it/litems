import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useCart } from '../context/CartContext';

interface NavbarProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

const Navbar: React.FC<NavbarProps> = ({ onNavigate, currentPage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems } = useCart();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'Store', id: 'store' },
    { name: 'Lookbook', id: 'lookbook' },
    { name: 'Brand Story', id: 'brand' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? 'bg-cream/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden p-2 -ml-2"
          onClick={() => setIsMobileMenuOpen(true)}
        >
          <Menu className="w-5 h-5 stroke-[1.5]" />
        </button>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-sm tracking-widest uppercase transition-colors hover:text-sage ${
                currentPage === item.id ? 'text-sage font-medium' : 'text-charcoal/70'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>

        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="absolute left-1/2 -translate-x-1/2 text-2xl font-serif tracking-[0.2em] uppercase"
        >
          Litems
        </button>

        {/* Icons */}
        <div className="flex items-center gap-4 lg:gap-6">
          <button className="hidden sm:block p-2 text-charcoal/70 hover:text-sage transition-colors">
            <Search className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="hidden sm:block p-2 text-charcoal/70 hover:text-sage transition-colors">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button
            onClick={() => onNavigate('cart')}
            className="p-2 relative text-charcoal/70 hover:text-sage transition-colors"
          >
            <ShoppingBag className="w-5 h-5 stroke-[1.5]" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 w-4 h-4 bg-sage text-white text-[10px] flex items-center justify-center rounded-full">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-charcoal/20 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 h-full w-[80%] max-w-sm bg-cream z-50 p-8 flex flex-col"
            >
              <div className="flex justify-between items-center mb-12">
                <span className="text-xl font-serif tracking-widest uppercase">Litems</span>
                <button onClick={() => setIsMobileMenuOpen(false)}>
                  <X className="w-6 h-6 stroke-[1.5]" />
                </button>
              </div>
              <div className="flex flex-col gap-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      onNavigate(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-lg tracking-widest uppercase text-left ${
                      currentPage === item.id ? 'text-sage font-medium' : 'text-charcoal/70'
                    }`}
                  >
                    {item.name}
                  </button>
                ))}
              </div>
              <div className="mt-auto pt-8 border-t border-charcoal/10">
                <p className="text-xs text-charcoal/40 uppercase tracking-widest mb-4">Follow Us</p>
                <div className="flex gap-4">
                  <span className="text-sm">Instagram</span>
                  <span className="text-sm">Pinterest</span>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
