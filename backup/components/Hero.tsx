import React from 'react';
import { Button } from './Button';
import { Play, ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const brands = ['L\'ORÉAL', 'SPRING', 'PayFit', 'France Toner', 'legalstart', 'Stripe', 'Qonto'];

  return (
    <section className="relative h-screen overflow-hidden bg-slate-950 flex flex-col">
      
      {/* === Hero Specific Gradient Background === */}
      <div className="absolute inset-0 z-0">
          {/* Main Dark Blue Gradient - centered but slightly diffused */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_closest-side,rgba(30,58,138,0.35),transparent)] rounded-full blur-3xl"></div>
          
          {/* Secondary Brighter Spot for depth (The 'Lighter' part requested) */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-niventy-600/20 blur-[80px] rounded-full mix-blend-screen"></div>
          
          {/* Subtle purple accent on the side for richness */}
          <div className="absolute top-1/4 right-0 w-[200px] h-[200px] bg-purple-900/20 blur-[100px] rounded-full mix-blend-screen opacity-50"></div>
          
          {/* Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/stardust.png')]"></div>
      </div>
      
      {/* Main Content Area - Centered */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto gap-8">
            
               {/* Badge */}
               <div className="inline-flex items-center gap-2 px-2 py-0.5 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-lg hover:border-white/20 transition-all cursor-default hover:shadow-white/5">
                  <span className="bg-niventy-600/90 text-white text-[7px] font-bold px-1.5 py-0.5 rounded-full uppercase tracking-wide shadow-[0_0_10px_rgba(37,99,235,0.4)] backdrop-blur-sm">
                     NOS SERVICES
                  </span>
                  <span className="text-[9px] font-semibold text-slate-300">
                     Places limitées pour Q2 2025
                  </span>
               </div>
              
              <h1 className="text-5xl md:text-6xl font-display font-bold tracking-tighter leading-[0.9] text-white drop-shadow-2xl uppercase">
                <span className="blur-[1px] hover:blur-none transition-all duration-500">TRANSFORMEZ VOS</span> <br/>
                <span className="blur-[1px] hover:blur-none transition-all duration-500">VISITEURS</span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white blur-[1px] hover:blur-none transition-all duration-500">EN CLIENTS FIDÈLES.</span>
              </h1>
              
              <p className="text-xs md:text-sm text-slate-400 leading-relaxed max-w-lg mx-auto font-medium">
                L'alliance parfaite entre Media Buying et Webdesign pour faire passer votre marque au niveau supérieur.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                <Button variant="primary" className="h-10 pl-6 pr-2 text-sm transition-all hover:scale-105 rounded-full flex items-center justify-between gap-3 group w-full sm:w-auto active:scale-95">
                  <span className="font-bold">Lancer ma croissance</span>
                  <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                    <ArrowRight size={14} />
                  </span>
                </Button>
                
                <a href="#work" className="w-full sm:w-auto justify-center group flex items-center gap-3 px-4 py-2 rounded-full text-slate-300 hover:text-white transition-colors font-bold bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 shadow-sm backdrop-blur-md text-xs">
                   <div className="w-6 h-6 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors bg-white/5 backdrop-blur-sm">
                      <Play size={10} className="fill-current ml-0.5" />
                   </div>
                   Voir le Showreel
                </a>
              </div>
          </div>
        </div>
      </div>

      {/* === Partner Logos Marquee - Separated Band === */}
      <div className="relative z-10 py-10 border-t border-white/5 bg-slate-950/20 backdrop-blur-sm">
          <div className="max-w-[1200px] mx-auto px-4 md:px-6">
              <p className="text-center text-[7px] font-semibold text-slate-500 uppercase tracking-widest mb-4">
                  Ils nous font confiance
              </p>
              
              <div className="w-full max-w-full overflow-hidden relative mask-linear-fade">
                  {/* Gradients for fading edges */}
                  <div className="absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-slate-950 to-transparent z-10 pointer-events-none"></div>
                  <div className="absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-slate-950 to-transparent z-10 pointer-events-none"></div>

                  <div className="flex animate-marquee hover:[animation-play-state:paused] whitespace-nowrap">
                      {/* First Set */}
                      <div className="flex gap-6 md:gap-8 items-center px-4 md:px-6">
                          {brands.map((brand, i) => (
                              <span key={`a-${i}`} className="text-xs md:text-sm font-bold text-slate-600 hover:text-slate-300 transition-colors cursor-default select-none">
                                  {brand}
                              </span>
                          ))}
                      </div>
                      {/* Duplicate Set for Loop */}
                      <div className="flex gap-6 md:gap-8 items-center px-4 md:px-6">
                          {brands.map((brand, i) => (
                              <span key={`b-${i}`} className="text-xs md:text-sm font-bold text-slate-600 hover:text-slate-300 transition-colors cursor-default select-none">
                                  {brand}
                              </span>
                          ))}
                      </div>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
};