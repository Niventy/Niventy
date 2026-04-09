import React from 'react';
import { Check, Zap, ArrowRight, Rocket } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 min-h-[500px] bg-slate-950 relative overflow-hidden flex items-center justify-center">
       {/* Background Decoration */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-niventy-900/20 rounded-full blur-[100px] pointer-events-none"></div>

       <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 relative z-10">
          <div className="text-center mb-3">
             <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full border border-blue-100 bg-blue-50 text-blue-600 text-[8px] font-bold uppercase tracking-widest mb-1.5 shadow-sm">
                <Rocket size={10} className="fill-current" /> NOS SERVICES
             </div>
             <h2 className="text-sm md:text-base lg:text-lg font-bold text-white mb-1.5 uppercase leading-tight">
                <span className="blur-[1px] hover:blur-none transition-all duration-500">TESTEZ LA PUISSANCE</span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-200 to-white blur-[1px] hover:blur-none transition-all duration-500">NIVENTY ADS.</span>
             </h2>
             <p className="text-slate-400 max-w-xl mx-auto text-[10px] md:text-xs">
                Une offre "No-Brainer" pour débloquer votre croissance. <br/>
                1 Mois de gestion complète + Création de contenu pour exploser vos résultats.
             </p>
          </div>

          <div className="max-w-4xl mx-auto">
             <div className="bg-slate-900/40 backdrop-blur-xl border border-white/10 rounded-[1rem] p-3 md:p-4 relative overflow-hidden shadow-2xl shadow-black/50 group hover:border-white/20 transition-all duration-500 hover:shadow-niventy-900/20 hover:bg-slate-900/50">
                {/* Visual Decoration */}
                <div className="absolute top-0 right-0 w-60 h-60 bg-niventy-600/20 rounded-full blur-[80px] -mr-15 -mt-15 group-hover:bg-niventy-600/30 transition-all duration-700 pointer-events-none"></div>
                
                <div className="flex flex-col lg:flex-row gap-3 items-center relative z-10">
                   {/* Left: Offer Details */}
                   <div className="flex-1 space-y-3">
                      <div>
                         <h3 className="text-sm md:text-base font-bold text-white mb-0.5 uppercase">Pack "Meta Ads Ignition"</h3>
                         <div className="flex flex-wrap gap-1 mb-1.5">
                            <span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[7px] font-semibold text-slate-300 backdrop-blur-sm">Gestion 1 Mois</span>
                            <span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[7px] font-semibold text-slate-300 backdrop-blur-sm">10 Créas Incluses</span>
                            <span className="px-1.5 py-0.5 rounded-md bg-white/5 border border-white/10 text-[7px] font-semibold text-niventy-300 backdrop-blur-sm">Spécial Lead Gen</span>
                         </div>
                         <p className="text-slate-400 leading-relaxed text-[10px]">
                            Nous prenons les clés de votre Business Manager pendant 30 jours pour réduire votre coût par prospect (CPL) et installer une structure rentable.
                         </p>
                      </div>
                      
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-2 gap-y-1.5">
                         {[
                            "Audit Complet & Setup Stratégique",
                            "10 Créatifs Publicitaires (Images/UGC)",
                            "Gestion Quotidienne des Campagnes",
                            "Tracking Avancé (Pixel & API Conversions)",
                            "Optimisation CPL & CPA",
                            "Reporting de Performance Hebdo"
                         ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-300">
                               <div className="mt-1 w-2.5 h-2.5 rounded-full bg-niventy-500 flex items-center justify-center shrink-0 text-white shadow-lg shadow-niventy-500/50">
                                  <Check size={7} strokeWidth={4} />
                               </div>
                               <span className="text-[9px] font-medium">{item}</span>
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* Right: Price & CTA separator */}
                   <div className="w-full lg:w-px h-px lg:h-40 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>

                   {/* Right: Price & CTA */}
                   <div className="w-full lg:w-auto text-center min-w-[180px]">
                      <p className="text-niventy-400 text-[7px] uppercase tracking-wider font-bold mb-1.5">OFFRE DÉCOUVERTE</p>
                      <div className="flex items-baseline justify-center gap-1 mb-3">
                         <span className="text-2xl font-bold text-white tracking-tight">599€</span>
                         <span className="text-slate-500 font-medium text-sm">HT</span>
                      </div>
                      <div className="space-y-1.5">
                         <Button variant="primary" className="w-full py-1.5 h-auto text-[10px] font-bold active:scale-95 uppercase tracking-wider">
                            LANCER MON MOIS D'ESSAI
                         </Button>
                         <p className="text-[7px] text-slate-500">
                            Sans engagement de durée.<br/>
                            Places limitées par mois.
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Footer Note */}
             <div className="mt-3 text-center flex flex-col items-center justify-center gap-1.5">
                <p className="text-slate-500 text-[10px]">
                   Besoin d'un écosystème complet (Site + Ads) ?
                </p>
                <a href="#services" className="inline-flex items-center gap-1.5 text-white hover:text-niventy-400 transition-colors text-[10px] font-medium border-b border-white/20 hover:border-niventy-400 pb-0.5">
                   Voir nos solutions Webdesign & Création <ArrowRight size={10} />
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};