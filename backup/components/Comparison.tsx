import React from 'react';
import { X, Check, Zap, ShieldCheck, User, Target, BarChart, Layers } from 'lucide-react';

export const Comparison: React.FC = () => {
  const others = [
    "Absence sur le long terme",
    "Manque de transparence",
    "Approche Fragmentée",
    "Suivi et Nurturing Inadéquats",
    "Pas de Suivi des Objectifs Globaux",
    "Suivi Inadéquat des Leads",
    "Stratégies Génériques"
  ];

  const us = [
    { text: "Stratégies de Long Terme Personnalisées", icon: Target },
    { text: "Transparence Totale et Communication Claire", icon: Zap },
    { text: "Approche Intégrée et Harmonisée", icon: Layers },
    { text: "Suivi et Nurturing Exhaustifs", icon: ShieldCheck },
    { text: "Alignement sur les Objectifs Globaux", icon: BarChart },
    { text: "Orientation Résultats", icon: User },
    { text: "Suivi et Support Post-Conversion", icon: Check }
  ];

  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Grid Background Effect */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] pointer-events-none"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header VS */}
        <div className="flex items-center justify-center gap-8 mb-16 relative">
           <div className="text-center md:text-right flex-1 hidden md:block">
              <h3 className="text-2xl font-bold text-slate-400">Les autres</h3>
           </div>
           
           <div className="relative z-10 w-24 h-24 flex items-center justify-center shrink-0">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-900 rounded-full blur-xl opacity-50 animate-pulse"></div>
              <div className="w-20 h-20 bg-gradient-to-b from-slate-800 to-slate-950 rounded-full border-4 border-slate-800 flex items-center justify-center relative z-10 shadow-2xl">
                 <span className="text-3xl font-black italic text-white pr-1">V</span>
                 <span className="text-3xl font-black italic text-blue-500">S</span>
              </div>
           </div>

           <div className="text-center md:text-left flex-1 hidden md:block">
              <h3 className="text-2xl font-bold text-white">Notre Agence</h3>
           </div>
        </div>
        
        <div className="text-center mb-12 max-w-2xl mx-auto md:hidden">
           <h3 className="text-2xl font-bold text-white mb-2">Pourquoi nous choisir ?</h3>
           <p className="text-slate-400 text-sm">Nous prenons soin de votre entreprise avec autant d'attention que si elle était la nôtre.</p>
        </div>
        
        {/* Comparison Table */}
        <div className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm relative">
           {/* Header for Mobile */}
           <div className="grid grid-cols-2 p-6 border-b border-slate-800 md:hidden bg-slate-900">
              <div className="text-center font-bold text-slate-400">La Concurrence</div>
              <div className="text-center font-bold text-white">Notre Agence</div>
           </div>

           {/* Content Rows */}
           <div className="relative">
              {/* Vertical Divider */}
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-slate-800 hidden md:block"></div>

              {others.map((item, index) => (
                 <div key={index} className="grid grid-cols-2 group hover:bg-slate-800/30 transition-colors border-b border-slate-800/50 last:border-0">
                    
                    {/* Left Side (Competitors) */}
                    <div className="p-6 md:p-8 flex items-center justify-start md:justify-end gap-3 md:gap-4 md:pr-12 opacity-60 grayscale group-hover:grayscale-0 transition-all">
                       <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                          <X size={16} className="text-slate-400" />
                       </div>
                       <span className="text-sm md:text-lg font-medium text-slate-400 text-left md:text-right">{item}</span>
                    </div>

                    {/* Right Side (Us) */}
                    <div className="p-6 md:p-8 flex items-center justify-end md:justify-start gap-3 md:gap-4 md:pl-12 bg-blue-900/5 relative overflow-hidden">
                       <div className="absolute left-0 top-0 bottom-0 w-1 bg-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                       <div className="hidden md:flex w-8 h-8 rounded-full bg-niventy-600 items-center justify-center shrink-0 shadow-lg shadow-niventy-600/30">
                          {React.createElement(us[index].icon, { size: 16, className: "text-white" })}
                       </div>
                       {/* Mobile Icon */}
                       <div className="md:hidden w-8 h-8 rounded-full bg-niventy-600 flex items-center justify-center shrink-0">
                          <Check size={14} className="text-white" />
                       </div>
                       <span className="text-sm md:text-lg font-bold text-white">{us[index].text}</span>
                    </div>

                 </div>
              ))}
           </div>
        </div>

      </div>
    </section>
  );
};