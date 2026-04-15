import React from 'react';
import { motion } from 'motion/react';

const BrandStory: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-32">
      {/* Introduction */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-sage font-semibold">Our Philosophy</span>
          <h1 className="text-5xl md:text-6xl font-serif leading-tight">
            Less, but <br /> Better.
          </h1>
          <p className="text-charcoal/60 leading-relaxed text-lg">
            Litems는 'Lifestyle'과 'Items'의 합성어로, 당신의 일상을 더 가치 있게 만드는 최소한의 오브제들을 제안합니다. 우리는 화려함보다는 본질에 집중하며, 시간이 흐를수록 깊이를 더해가는 디자인의 힘을 믿습니다.
          </p>
        </div>
        <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
          <img
            src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?auto=format&fit=crop&q=80&w=800"
            alt="Brand Story 1"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Values */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="space-y-6">
          <div className="w-12 h-px bg-sage" />
          <h3 className="text-xl font-serif italic">Simplicity</h3>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            불필요한 장식을 걷어내고 기능과 형태의 조화를 추구합니다. 단순함은 가장 정교한 아름다움입니다.
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-px bg-sage" />
          <h3 className="text-xl font-serif italic">Sustainability</h3>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            한 번 쓰고 버려지는 것이 아닌, 대를 이어 물려줄 수 있는 견고한 재료와 공법을 선택합니다.
          </p>
        </div>
        <div className="space-y-6">
          <div className="w-12 h-px bg-sage" />
          <h3 className="text-xl font-serif italic">Inspiration</h3>
          <p className="text-sm text-charcoal/60 leading-relaxed">
            우리의 제품이 당신의 공간에 놓였을 때, 새로운 영감과 평온함이 시작되기를 바랍니다.
          </p>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[60vh] rounded-3xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1513519247354-497a8891112c?auto=format&fit=crop&q=80&w=1920"
          alt="Atmosphere"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-charcoal/20 flex items-center justify-center">
          <p className="text-white text-2xl md:text-4xl font-serif italic text-center px-6">
            "당신의 취향이 머무는 곳, Litems"
          </p>
        </div>
      </section>

      {/* Craftsmanship */}
      <section className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-serif">Craftsmanship</h2>
        <p className="text-charcoal/60 leading-relaxed">
          우리는 전 세계의 장인들과 협업하여 각 지역의 특색이 담긴 소재를 발굴합니다. 기계로 찍어낸 완벽함보다는 사람의 손길이 닿아 만들어진 미세한 불완전함 속의 따뜻함을 소중히 여깁니다. 모든 제품은 엄격한 품질 검사를 거쳐 당신의 손에 전달됩니다.
        </p>
      </section>
    </div>
  );
};

export default BrandStory;
