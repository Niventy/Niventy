import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4 md:px-6">
       <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
             <p className="font-accent italic text-slate-400 text-lg md:text-xl mb-4">Notre offre</p>
             <h2 className="text-3xl md:text-5xl lg:text-[56px] font-display font-bold text-slate-900 mb-4 tracking-display leading-[1.05]">
                Parlons résultats<br/>
                <span className="font-accent italic normal-case font-normal text-accent-500">et rentabilité concrète.</span>
             </h2>
             <p className="text-slate-500 max-w-xl mx-auto text-sm">
                Une offre "No-Brainer" pour débloquer votre croissance.<br/>
                1 Mois de gestion complète + Création de contenu pour exploser vos résultats.
             </p>
          </div>

          {/* Pricing card — white with border */}
          <div className="max-w-4xl mx-auto">
             <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-sm">

                <div className="flex flex-col lg:flex-row gap-6 items-center">
                   {/* Left: Offer Details */}
                   <div className="flex-1 space-y-4">
                      <div>
                         <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 uppercase">Pack "Meta Ads Ignition"</h3>
                         <div className="flex flex-wrap gap-2 mb-3">
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">Gestion 1 Mois</span>
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">10 Créas Incluses</span>
                            <span className="px-2.5 py-1 rounded-md bg-accent-50 text-xs font-semibold text-accent-600">Spécial Lead Gen</span>
                         </div>
                         <p className="text-slate-500 leading-relaxed text-sm">
                            Nous prenons les clés de votre Business Manager pendant 30 jours pour réduire votre coût par prospect (CPL) et installer une structure rentable.
                         </p>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                         {[
                            "Audit Complet & Setup Stratégique",
                            "10 Créatifs Publicitaires (Images/UGC)",
                            "Gestion Quotidienne des Campagnes",
                            "Tracking Avancé (Pixel & API Conversions)",
                            "Optimisation CPL & CPA",
                            "Reporting de Performance Hebdo"
                         ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-700">
                               <div className="mt-0.5 w-4 h-4 rounded-full bg-accent-500 flex items-center justify-center shrink-0 text-white">
                                  <Check size={10} strokeWidth={3} />
                               </div>
                               <span className="text-sm">{item}</span>
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* Separator */}
                   <div className="w-full lg:w-px h-px lg:h-48 bg-slate-200"></div>

                   {/* Right: Price & CTA */}
                   <div className="w-full lg:w-auto text-center min-w-[200px]">
                      <p className="text-accent-500 text-xs uppercase tracking-wider font-bold mb-2">OFFRE DÉCOUVERTE</p>
                      <div className="flex items-baseline justify-center gap-1 mb-4">
                         <span className="text-4xl font-bold text-slate-900 tracking-tight">599€</span>
                         <span className="text-slate-400 font-medium text-sm">HT</span>
                      </div>
                      <div className="space-y-2">
                         <Button variant="primary" className="w-full py-3 h-auto text-sm font-bold active:scale-95 uppercase tracking-wider">
                            LANCER MON MOIS D'ESSAI
                         </Button>
                         <p className="text-xs text-slate-400">
                            Sans engagement de durée.<br/>
                            Places limitées par mois.
                         </p>
                      </div>
                   </div>
                </div>
             </div>

             {/* Footer Note */}
             <div className="mt-4 text-center flex flex-col items-center justify-center gap-1.5">
                <p className="text-slate-400 text-sm">
                   Besoin d'un écosystème complet (Site + Ads) ?
                </p>
                <a href="#services" className="inline-flex items-center gap-1.5 text-slate-900 hover:text-accent-500 transition-colors text-sm font-medium border-b border-slate-300 hover:border-accent-400 pb-0.5">
                   Voir nos solutions Webdesign & Création <ArrowRight size={12} />
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};
