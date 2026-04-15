import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SlidersHorizontal, ChevronDown } from 'lucide-react';
import { products } from '../data';
import ProductCard from '../components/ProductCard';

const categories = ['All', 'Furniture', 'Lighting', 'Decor', 'Textile', 'Office', 'Kitchen'];
const sortOptions = [
  { label: 'Newest', value: 'newest' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
];

const Store: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortBy, setSortBy] = useState('newest');
  const [isSortOpen, setIsSortOpen] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (activeCategory !== 'All') {
      result = result.filter(p => p.category === activeCategory);
    }

    switch (sortBy) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      default:
        // Newest first (mocked by id or isNew)
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
    }

    return result;
  }, [activeCategory, sortBy]);

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4">
        <h1 className="text-4xl font-serif">Store</h1>
        <p className="text-charcoal/40 text-sm uppercase tracking-widest">Discover your lifestyle</p>
      </div>

      {/* Filters & Sort */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 border-y border-charcoal/10 py-8">
        <div className="flex flex-wrap gap-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`text-xs uppercase tracking-widest transition-all relative pb-1 ${
                activeCategory === cat ? 'text-sage font-semibold' : 'text-charcoal/40 hover:text-charcoal'
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="activeCat"
                  className="absolute bottom-0 left-0 w-full h-px bg-sage"
                />
              )}
            </button>
          ))}
        </div>

        <div className="relative">
          <button
            onClick={() => setIsSortOpen(!isSortOpen)}
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-charcoal/60 hover:text-charcoal transition-colors"
          >
            <SlidersHorizontal className="w-4 h-4" />
            <span>Sort By: {sortOptions.find(o => o.value === sortBy)?.label}</span>
            <ChevronDown className={`w-4 h-4 transition-transform ${isSortOpen ? 'rotate-180' : ''}`} />
          </button>

          <AnimatePresence>
            {isSortOpen && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute right-0 mt-4 w-48 bg-white shadow-xl rounded-lg overflow-hidden z-20 border border-charcoal/5"
              >
                {sortOptions.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => {
                      setSortBy(option.value);
                      setIsSortOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 text-xs uppercase tracking-widest hover:bg-cream transition-colors ${
                      sortBy === option.value ? 'text-sage font-semibold' : 'text-charcoal/60'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </AnimatePresence>
      </div>

      {filteredProducts.length === 0 && (
        <div className="py-32 text-center space-y-4">
          <p className="text-charcoal/40 uppercase tracking-widest">No products found in this category.</p>
          <button
            onClick={() => setActiveCategory('All')}
            className="text-sage border-b border-sage pb-1 text-sm uppercase tracking-widest"
          >
            Clear Filters
          </button>
        </div>
      )}
    </div>
  );
};

export default Store;
