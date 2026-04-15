import React from 'react';
import { motion } from 'motion/react';
import { lookbookItems } from '../data';

const Lookbook: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-12 space-y-12">
      <div className="space-y-4 text-center">
        <h1 className="text-4xl font-serif">Lookbook</h1>
        <p className="text-charcoal/40 text-sm uppercase tracking-widest">Inspiration from our community</p>
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {lookbookItems.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <img
              src={item.image}
              alt={item.author}
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8 text-white">
              <div className="space-y-2">
                <p className="text-lg font-serif italic">{item.author}</p>
                <p className="text-xs uppercase tracking-widest opacity-70">{item.location}</p>
                <div className="pt-4 flex gap-2">
                  {item.products.map(pId => (
                    <span key={pId} className="text-[10px] bg-white/20 backdrop-blur-md px-2 py-1 rounded-full">
                      Item #{pId}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Extra mock items for masonry feel */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`extra-${i}`}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm"
          >
            <img
              src={`https://picsum.photos/seed/litems-${i}/800/${600 + (i % 3) * 200}`}
              alt="Inspiration"
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Lookbook;
