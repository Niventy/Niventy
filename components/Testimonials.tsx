import React from 'react';

const reviews = [
  {
    quote: "Je recommande. Réalisation d'un site internet pour mon entreprise. Respect des consignes et rapidité.",
    author: "Albéric Brevet",
    role: "ROANNE CONCIERGERIE",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Alexandre m'a accompagné dans divers projets et c'est devenu un partenaire de confiance, disponible lorsque nous avons besoin de ses services. Il sait relever les défis proposés par moi ou par les personnes que j'ai pu lui recommander. Merci à lui.",
    author: "Christophe Morin",
    role: "LH2I — IT SERVICE",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Alexandre a su comprendre nos enjeux rapidement. Son expertise en media buying a boosté notre acquisition en quelques semaines. Vraiment ravi de la collaboration.",
    author: "Jérémy",
    role: "JEGO AGENCY",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=200&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-cream-100 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 relative z-10">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="font-accent italic text-slate-500 text-2xl md:text-3xl mb-6">Nos clients</p>
          <h3 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 tracking-display leading-[1.05]">
            Ils nous ont réellement fait confiance.
          </h3>
        </div>

        {/* Brands logos — marquee */}
        <div className="relative overflow-hidden mb-16 mask-fade-x">
          <div className="flex animate-marquee gap-14 md:gap-20 w-max">
            {[...Array(2)].map((_, dup) => (
              <div key={dup} className="flex items-center gap-14 md:gap-20 shrink-0">
                <img src="/logos/lorangebleue.png" alt="L'Orange Bleue" className="h-10 md:h-12 object-contain opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/logos/rocha-paris.avif" alt="Rocha Paris" className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/logos/universal-music.svg" alt="Universal Music Group" className="h-8 md:h-10 object-contain opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/logos/semji.webp" alt="Semji" className="h-7 md:h-8 object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
                <img src="/logos/rec118.png" alt="Rec118" className="h-8 md:h-10 object-contain invert opacity-60 hover:opacity-100 transition-all duration-300" />
                <span className="text-2xl md:text-3xl font-black text-slate-900 select-none italic opacity-60 hover:opacity-100 transition-all duration-300">indy</span>
                <img src="/logos/inandfi-noir.png" alt="In&Fi" className="h-12 md:h-14 object-contain opacity-60 hover:opacity-100 transition-all duration-300" />
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial cards — horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] ${
                index === 0 ? 'bg-niventy-500 text-white' :
                index === 1 ? 'bg-dark-950 text-white' :
                'bg-amber-400 text-slate-900'
              }`}
            >
              <p className={`font-accent italic text-lg md:text-xl leading-snug mb-6 ${
                index === 2 ? 'text-slate-900' : 'text-white'
              }`}>
                "{review.quote}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/20 shadow-md">
                  <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-bold text-sm">{review.author}</p>
                  <p className={`text-xs ${index === 2 ? 'text-slate-700' : 'text-white/60'}`}>{review.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


