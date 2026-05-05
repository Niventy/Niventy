import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from './Button';

export const Pricing: React.FC = () => {
  return (
    <section id="pricing" className="py-16 px-4 md:px-6">
       <div className="max-w-[1200px] mx-auto">

          {/* Header */}
          <div className="text-center mb-12">
             <p className="font-accent italic text-slate-500 text-2xl md:text-3xl mb-6">Notre offre</p>
             <h2 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 mb-4 tracking-display leading-[1.05]">
                Parlons résultats<br/>
                <span className="text-niventy-500">et rentabilité concrète.</span>
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
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">Gestion mensuelle</span>
                            <span className="px-2.5 py-1 rounded-md bg-slate-100 text-xs font-semibold text-slate-600">Créas incluses</span>
                            <span className="px-2.5 py-1 rounded-md bg-niventy-50 text-xs font-semibold text-niventy-600">Spécial Lead Gen</span>
                         </div>
                         <p className="text-slate-500 leading-relaxed text-sm">
                            Nous prenons les clés de votre Business Manager pendant 30 jours pour réduire votre coût par prospect (CPL) et installer une structure rentable.
                         </p>
                      </div>

                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
                         {[
                            "Audit complet & setup stratégique",
                            "Créatifs publicitaires (Images / Vidéos / UGC)",
                            "Gestion quotidienne des campagnes",
                            "Tracking server-side (Pixel & API Conversions)",
                            "A/B testing créatifs & audiences (CBO / ABO)",
                            "Reporting de performance hebdo (Looker Studio)"
                         ].map((item, i) => (
                            <li key={i} className="flex items-start gap-2 text-slate-700">
                               <div className="mt-0.5 w-4 h-4 rounded-full bg-niventy-500 flex items-center justify-center shrink-0 text-white">
                                  <Check size={10} strokeWidth={3} />
                               </div>
                               <span className="text-sm">{item}</span>
                            </li>
                         ))}
                      </ul>
                   </div>

                   {/* Separator */}
                   <div className="w-full lg:w-px h-px lg:h-48 bg-slate-200"></div>

                   {/* Right: Quote CTA */}
                   <div className="w-full lg:w-auto text-center min-w-[220px]">
                      <p className="text-niventy-500 text-xs uppercase tracking-wider font-bold mb-3">Offre sur devis</p>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 max-w-[240px] mx-auto">
                         Tarif personnalisé selon votre budget média, vos objectifs et votre secteur.
                      </p>
                      <Button variant="primary" className="w-full py-3 h-auto text-sm font-bold active:scale-95 uppercase tracking-wider">
                         OBTENIR UN DEVIS
                      </Button>
                   </div>
                </div>
             </div>

             {/* Footer Note */}
             <div className="mt-4 text-center flex flex-col items-center justify-center gap-1.5">
                <p className="text-slate-400 text-sm">
                   Besoin d'un écosystème complet (Site + Ads) ?
                </p>
                <a href="#services" className="inline-flex items-center gap-1.5 text-slate-900 hover:text-niventy-500 transition-colors text-sm font-medium border-b border-slate-300 hover:border-niventy-400 pb-0.5">
                   Voir nos solutions Webdesign & Création <ArrowRight size={12} />
                </a>
             </div>
          </div>
       </div>
    </section>
  );
};
