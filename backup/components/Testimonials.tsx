import React, { useState, useEffect } from 'react';
import { Quote } from 'lucide-react';

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
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000); // Slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 min-h-[500px] bg-white relative overflow-hidden border-t border-slate-100 flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          <div className="w-12 h-12 bg-niventy-50 border border-niventy-100 rounded-full flex items-center justify-center mx-auto mb-6 text-niventy-600">
             <Quote size={18} fill="currentColor" />
          </div>

          <div className="relative min-h-[180px] flex items-center justify-center">
          {reviews.map((review, index) => (
            <div 
              key={index}
              className={`absolute top-0 left-0 w-full transition-all duration-700 ease-in-out transform flex flex-col items-center text-center ${
                index === currentIndex 
                  ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' 
                  : 'opacity-0 translate-y-4 scale-95 pointer-events-none'
              }`}
            >
              <h3 className="text-lg md:text-xl font-bold leading-tight mb-6 text-slate-900 uppercase">
                 "{review.quote}"
              </h3>
              
              <div className="flex items-center justify-center gap-3">
                 <div className="w-10 h-10 bg-slate-100 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <img src={review.image} alt={review.author} className="w-full h-full object-cover" />
                 </div>
                 <div className="text-left">
                    <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                    <p className="text-[10px] text-slate-500 font-medium">{review.role}</p>
                 </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-1.5 mt-6">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex ? 'bg-niventy-600 w-6' : 'bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

        </div>
      </div>
    </section>
  );
};