import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Process: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto bg-dark-950 rounded-3xl overflow-hidden">
        <div className="py-20 md:py-28 text-center px-8 md:px-16">
          <p className="font-accent italic text-white/50 text-2xl md:text-3xl mb-6">Prêt à scaler ?</p>
          <h3 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-white tracking-display leading-[1.05] max-w-4xl mx-auto mb-6">
            Nous ne sommes pas là pour exécuter, mais pour <span className="text-amber-400">gagner.</span>
          </h3>
          <p className="text-white/40 text-base md:text-lg max-w-xl mx-auto mb-10">
            Réservez un appel stratégique de 30 minutes. On analyse votre acquisition et on vous montre comment scaler.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="inline-flex items-center justify-center rounded-full px-8 py-4 text-base font-bold transition-all duration-300 bg-amber-400 text-slate-900 border border-amber-300 shadow-[0_0_15px_rgba(251,191,36,0.3)] hover:shadow-[0_0_25px_rgba(251,191,36,0.5)] hover:bg-amber-500 active:scale-95">
              Réserver un appel gratuit
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <a href="mailto:hello@niventy.com" className="text-white/50 hover:text-white transition-colors text-sm font-medium">
              ou écrivez-nous → hello@niventy.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
