import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { products, lookbookItems } from '../data';
import ProductCard from '../components/ProductCard';

interface HomeProps {
  onNavigate: (page: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const bestSellers = products.filter(p => p.isBestSeller).slice(0, 4);

  return (
    <div className="space-y-32 pb-32">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=1920"
            alt="Hero"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover brightness-95"
          />
        </motion.div>

        <div className="relative z-10 text-center space-y-8 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-serif italic text-balance leading-tight">
              Objects for a <br /> Mindful Life
            </h1>
            <p className="text-white/80 text-sm md:text-lg tracking-[0.2em] uppercase max-w-2xl mx-auto">
              Curating the essence of minimalist living
            </p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            onClick={() => onNavigate('store')}
            className="bg-sage text-white px-10 py-4 rounded-full text-sm uppercase tracking-widest hover:bg-white hover:text-sage transition-all duration-300 shadow-xl"
          >
            나만의 취향 발견하기
          </motion.button>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40"
        >
          <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <motion.div
              animate={{ y: [0, 48] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
              className="absolute top-0 left-0 w-full h-1/2 bg-white"
            />
          </div>
        </motion.div>
      </section>

      {/* Magazine Curation */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-sage font-semibold">Theme 01</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              오후의 휴식: <br /> 따뜻한 빛과 나무의 질감
            </h2>
            <p className="text-charcoal/60 leading-relaxed max-w-md">
              자연광이 스며드는 창가, 손끝에 닿는 부드러운 원목의 감촉. <br /> 바쁜 일상 속에서 잠시 멈춰 서서 나만의 온전한 시간을 가질 수 있도록 돕는 오브제들을 소개합니다.
            </p>
            <button
              onClick={() => onNavigate('store')}
              className="flex items-center gap-4 text-sm uppercase tracking-widest group"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?auto=format&fit=crop&q=80&w=800"
                alt="Minimalist Interior"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="aspect-[3/4] rounded-2xl overflow-hidden shadow-lg mt-16"
            >
              <img
                src="https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?auto=format&fit=crop&q=80&w=800"
                alt="Lifestyle Object"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="bg-beige/10 py-32 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex justify-between items-end">
            <div className="space-y-4">
              <h2 className="text-4xl font-serif">Best Sellers</h2>
              <p className="text-charcoal/40 text-sm uppercase tracking-widest">Most loved by our community</p>
            </div>
            <button
              onClick={() => onNavigate('store')}
              className="text-sm border-b border-charcoal pb-1 hover:text-sage hover:border-sage transition-colors"
            >
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Lookbook Preview */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-serif">In Your Space</h2>
            <p className="text-charcoal/40 text-sm uppercase tracking-widest">Real stories from our community</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {lookbookItems.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer"
                onClick={() => onNavigate('lookbook')}
              >
                <img
                  src={item.image}
                  alt={item.author}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                  <p className="text-sm font-medium">{item.author}</p>
                  <p className="text-[10px] uppercase tracking-widest opacity-70">{item.location}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('lookbook')}
              className="inline-flex items-center gap-4 text-sm uppercase tracking-widest group"
            >
              <span>View Full Lookbook</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </button>
          </div>
        </div>
      </section>

      {/* Brand Story Teaser */}
      <section className="max-w-5xl mx-auto px-6 text-center space-y-12">
        <div className="w-px h-24 bg-sage/30 mx-auto" />
        <h2 className="text-3xl md:text-4xl font-serif italic leading-relaxed text-balance">
          "우리는 단순한 물건이 아닌, <br /> 당신의 삶을 채우는 이야기를 제안합니다."
        </h2>
        <button
          onClick={() => onNavigate('brand')}
          className="text-xs uppercase tracking-[0.3em] text-charcoal/40 hover:text-sage transition-colors"
        >
          Our Story
        </button>
      </section>
    </div>
  );
};

export default Home;
