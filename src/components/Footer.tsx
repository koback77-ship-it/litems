import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal text-cream py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="space-y-6">
          <h2 className="text-2xl font-serif tracking-[0.2em] uppercase">Litems</h2>
          <p className="text-cream/60 text-sm leading-relaxed max-w-xs">
            Curating objects that bring peace and inspiration to your daily life. Minimalist aesthetics for the modern home.
          </p>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 text-cream/40">Shop</h3>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-sage transition-colors">All Products</button></li>
            <li><button className="hover:text-sage transition-colors">Furniture</button></li>
            <li><button className="hover:text-sage transition-colors">Lighting</button></li>
            <li><button className="hover:text-sage transition-colors">Decor</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 text-cream/40">Company</h3>
          <ul className="space-y-4 text-sm">
            <li><button className="hover:text-sage transition-colors">Brand Story</button></li>
            <li><button className="hover:text-sage transition-colors">Lookbook</button></li>
            <li><button className="hover:text-sage transition-colors">Contact</button></li>
            <li><button className="hover:text-sage transition-colors">Sustainability</button></li>
          </ul>
        </div>

        <div>
          <h3 className="text-xs uppercase tracking-[0.2em] mb-6 text-cream/40">Newsletter</h3>
          <p className="text-sm text-cream/60 mb-6">Join our community for lifestyle inspiration and exclusive offers.</p>
          <div className="flex border-b border-cream/20 pb-2">
            <input
              type="email"
              placeholder="Your email address"
              className="bg-transparent border-none outline-none text-sm w-full placeholder:text-cream/30"
            />
            <button className="text-xs uppercase tracking-widest hover:text-sage transition-colors">Join</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-cream/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest text-cream/30">
        <p>© 2024 Litems. All rights reserved.</p>
        <div className="flex gap-8">
          <button className="hover:text-cream transition-colors">Privacy Policy</button>
          <button className="hover:text-cream transition-colors">Terms of Service</button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
