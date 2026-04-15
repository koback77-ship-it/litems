import React from 'react';
import { motion } from 'motion/react';
import { Plus, Heart } from 'lucide-react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group relative"
    >
      <div className="aspect-[4/5] overflow-hidden bg-beige/10 rounded-lg relative">
        <img
          src={product.image}
          alt={product.name}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {product.isBestSeller && (
            <span className="bg-sage text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm">
              Best
            </span>
          )}
          {product.isNew && (
            <span className="bg-beige text-charcoal text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm">
              New
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <button
            onClick={() => addToCart(product)}
            className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:bg-sage hover:text-white transition-colors"
          >
            <Plus className="w-5 h-5 stroke-[1.5]" />
          </button>
          <button className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-sm hover:text-red-400 transition-colors">
            <Heart className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>
      </div>

      <div className="mt-4 space-y-1">
        <div className="flex justify-between items-start">
          <h3 className="text-sm font-medium text-charcoal/80 group-hover:text-sage transition-colors">
            {product.name}
          </h3>
          <span className="text-sm font-serif">₩{product.price.toLocaleString()}</span>
        </div>
        <p className="text-[11px] text-charcoal/40 uppercase tracking-widest">{product.category}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
