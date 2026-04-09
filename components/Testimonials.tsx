import React from 'react';

const reviews = [
  {
    quote: "L'aspect le plus précieux de la collaboration avec Niventy est leur approche proactive et leur véritable partenariat.",
    author: "Thomas Durant",
    role: "CEO @ TechStart",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Nos ventes ont augmenté de 210% en 3 mois. L'équipe a su comprendre notre marque et créer des ads qui convertissent vraiment.",
    author: "Sarah L.",
    role: "Fondatrice @ GlowSkin",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
  },
  {
    quote: "Un webdesign incroyable qui a totalement transformé notre image de marque. Le tracking est enfin précis, on sait où va notre budget.",
    author: "Marc O.",
    role: "CMO @ FinMove",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto w-full px-4 relative z-10">

        {/* Title */}
        <div className="text-center mb-12">
          <p className="font-accent italic text-slate-400 text-lg md:text-xl mb-4">Nos clients</p>
          <h3 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 tracking-display leading-[1.05]">
            Les marques qui nous font <span className="font-accent italic normal-case text-accent-500 font-normal">confiance.</span>
          </h3>
        </div>

        {/* Brands logos */}
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14 opacity-30 mb-16">
          {['L\'ORÉAL', 'SPRING', 'PayFit', 'France Toner', 'legalstart', 'Stripe', 'Qonto'].map((brand, i) => (
            <span key={i} className="text-lg md:text-xl font-bold text-slate-900 select-none">{brand}</span>
          ))}
        </div>

        {/* Testimonial cards — horizontal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`rounded-2xl p-6 md:p-8 flex flex-col justify-between min-h-[260px] ${
                index === 0 ? 'bg-accent-500 text-white' :
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


