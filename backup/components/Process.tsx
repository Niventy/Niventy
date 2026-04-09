import React from 'react';
import { 
  Search, 
  PenTool, 
  Rocket, 
  BarChart2, 
  TrendingUp,
  Heart,
  Check,
  X,
  Zap,
  Briefcase,
  Layers
} from 'lucide-react';

export const Process: React.FC = () => {
  const stats = [
    { label: "Clients Actifs", value: "70+", desc: "Nous font confiance au quotidien" },
    { label: "Rétention Client", value: "98%", desc: "Partenariat long terme" },
    { label: "Revenus Générés/an", value: "$2M+", desc: "Pour nos clients" },
  ];

  const phases = [
    {
      id: "01",
      title: "AUDIT",
      subtitle: "Immersion",
      icon: Search,
      bg: "bg-blue-50",
      border: "border-blue-100",
      iconColor: "text-blue-600",
      textColor: "text-blue-900"
    },
    {
      id: "02",
      title: "SETUP",
      subtitle: "Fondations",
      icon: PenTool,
      bg: "bg-blue-100",
      border: "border-blue-200",
      iconColor: "text-blue-700",
      textColor: "text-blue-900"
    },
    {
      id: "03",
      title: "LAUNCH",
      subtitle: "Go-Live",
      icon: Rocket,
      bg: "bg-blue-600",
      border: "border-blue-600",
      iconColor: "text-white",
      textColor: "text-white"
    },
    {
      id: "04",
      title: "OPTIMIZE",
      subtitle: "Rentabilité",
      icon: BarChart2,
      bg: "bg-slate-800",
      border: "border-slate-800",
      iconColor: "text-white",
      textColor: "text-white"
    },
    {
      id: "05",
      title: "SCALE",
      subtitle: "Croissance",
      icon: TrendingUp,
      bg: "bg-slate-900",
      border: "border-slate-900",
      iconColor: "text-white",
      textColor: "text-white"
    }
  ];

  return (
    <>
      {/* =========================================
          SECTION 1: PHILOSOPHY & STATS (LIGHT) 
          ========================================= */}
      <section className="py-20 min-h-[500px] bg-white relative overflow-hidden flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto mb-3">
               <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[8px] font-bold uppercase tracking-widest mb-1.5">
                  <Heart size={10} className="fill-current" /> NOS SERVICES
               </div>
               <h2 className="text-sm md:text-base font-bold text-slate-900 mb-1 uppercase leading-tight">
                  <span className="blur-[1px] hover:blur-none transition-all duration-500">PLUS QU'UNE AGENCE.</span> <br/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-[1px] hover:blur-none transition-all duration-500">
                     VOTRE PARTENAIRE.
                  </span>
               </h2>
               <p className="text-[10px] md:text-xs text-slate-600 max-w-xl mx-auto">
                  Nous avons supprimé les frictions des agences traditionnelles pour nous concentrer sur une seule chose : votre rentabilité.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 max-w-4xl mx-auto">
               {stats.map((stat, idx) => (
                     <div key={idx} className="bg-slate-50 border border-slate-100 p-2 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                     <div className="text-lg md:text-xl font-bold text-slate-900 tracking-tight mb-0.5">
                         {stat.value}
                     </div>
                     <div className="text-[10px] font-bold text-niventy-600 mb-0.5">
                        {stat.label}
                     </div>
                     <p className="text-[8px] text-slate-500 font-medium">
                        {stat.desc}
                     </p>
                  </div>
               ))}
            </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: METHOD NIVENTY (LIGHT)
          ========================================= */}
      <section id="process" className="py-20 min-h-[500px] bg-slate-50 relative overflow-hidden flex items-center justify-center">
        
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 relative z-10">
           <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[8px] font-bold uppercase tracking-widest mb-1.5">
                 <Zap size={10} className="fill-current" /> NOS SERVICES
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 mb-0.5 uppercase">
                <span className="blur-[1px] hover:blur-none transition-all duration-500">LA MÉTHODE</span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-[1px] hover:blur-none transition-all duration-500">NIVENTY™.</span>
              </h3>
              <p className="text-slate-600 text-[10px]">5 Étapes vers la domination de votre marché.</p>
           </div>

           {/* MAIN METHOD CONTAINER */}
           <div className="max-w-6xl mx-auto rounded-[1rem] overflow-hidden bg-white shadow-xl border border-slate-200">
              
              {/* 1. THE PHASES */}
              <div className="grid grid-cols-1 md:grid-cols-5">
                 {phases.map((phase, idx) => (
                    <div 
                      key={idx} 
                      className={`${phase.bg} p-2 md:p-2 flex flex-col items-center text-center relative group md:h-20 justify-center overflow-hidden border-r border-slate-100 last:border-0`}
                    >
                       <div className={`relative z-10 mb-1 p-1.5 rounded-lg backdrop-blur-sm border shadow-sm group-hover:-translate-y-1 transition-transform duration-300 ${idx >= 2 ? 'bg-white/20 border-white/20' : 'bg-white border-slate-100'}`}>
                          {React.createElement(phase.icon, { size: 14, className: phase.iconColor })}
                       </div>
                       
                       <div className="relative z-10">
                          <h4 className={`text-xs font-bold uppercase tracking-wider mb-0.5 ${phase.textColor}`}>{phase.title}</h4>
                          <span className={`text-[7px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded-full border ${idx >= 2 ? 'bg-black/30 text-white/90 border-white/10' : 'bg-white text-slate-600 border-slate-200'}`}>
                             {phase.subtitle}
                          </span>
                       </div>
                    </div>
                 ))}
              </div>

              {/* 2. THE SWIMLANES (Light Rows below) */}
              <div className="hidden md:block bg-white p-3 border-t border-slate-100">
                 <div className="space-y-3">
                    
                    {/* Stratégie Row */}
                    <div className="flex items-center gap-3">
                       <div className="w-20 shrink-0 flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-[8px]">
                          <Briefcase size={12} /> Stratégie
                       </div>
                       <div className="flex-1 grid grid-cols-5 gap-2 relative">
                          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 -translate-y-1/2 z-0"></div>
                          
                          <div className="col-start-1 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Audit & Plan Média</div>
                          </div>
                          <div className="col-start-2 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Validation Offre</div>
                          </div>
                          <div className="col-start-5 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Expansion Canaux</div>
                          </div>
                       </div>
                    </div>

                    {/* Création Row */}
                    <div className="flex items-center gap-3">
                       <div className="w-20 shrink-0 flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-[8px]">
                          <PenTool size={12} /> Création
                       </div>
                       <div className="flex-1 grid grid-cols-5 gap-2 relative">
                          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 -translate-y-1/2 z-0"></div>
                          
                          <div className="col-start-1 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Benchmark</div>
                          </div>
                          <div className="col-start-2 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Prod. 10 UGC</div>
                          </div>
                          <div className="col-start-3 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Testing Angles</div>
                          </div>
                          <div className="col-start-4 col-span-2 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm w-full">Iteration & Scale Factory</div>
                          </div>
                       </div>
                    </div>

                    {/* Data Row */}
                    <div className="flex items-center gap-3">
                       <div className="w-20 shrink-0 flex items-center gap-2 text-slate-500 font-bold uppercase tracking-wider text-[8px]">
                          <Layers size={12} /> Data
                       </div>
                       <div className="flex-1 grid grid-cols-5 gap-2 relative">
                          <div className="absolute top-1/2 left-0 w-full h-px border-t border-dashed border-slate-200 -translate-y-1/2 z-0"></div>
                          
                          <div className="col-start-2 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Setup CAPI</div>
                          </div>
                          <div className="col-start-4 relative z-10">
                             <div className="bg-slate-50 border border-slate-200 text-slate-600 text-[8px] font-medium p-1.5 rounded-lg text-center shadow-sm">Analyse ROAS</div>
                          </div>
                       </div>
                    </div>

                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: COMPARISON (LIGHT)
          ========================================= */}
      <section className="py-20 min-h-[500px] bg-white relative flex items-center justify-center">
        <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
           <div className="text-center mb-3">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[8px] font-bold uppercase tracking-widest mb-1.5">
                 <Briefcase size={10} className="fill-current" /> NOS SERVICES
              </div>
              <h3 className="text-sm md:text-base font-bold text-slate-900 uppercase">
                <span className="blur-[1px] hover:blur-none transition-all duration-500">POURQUOI</span> <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-[1px] hover:blur-none transition-all duration-500">NIVENTY ?</span>
              </h3>
              <p className="text-slate-600 text-[10px] mt-0.5">Nous ne sommes pas là pour exécuter, mais pour gagner.</p>
           </div>

           <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 items-stretch max-w-5xl mx-auto">
              {/* THE OTHERS (Grey) */}
              <div className="bg-slate-50 rounded-xl p-3 lg:p-4 border border-slate-200 flex flex-col">
                 <div className="flex items-center gap-2 mb-3">
                    <div className="p-1.5 bg-white rounded-full border border-slate-200 text-slate-400">
                       <Briefcase size={14} />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-slate-600 uppercase">Agence Classique</h4>
                       <p className="text-[8px] text-slate-400">Le modèle "Prestataire"</p>
                    </div>
                 </div>
                 
                 <ul className="space-y-2 flex-1">
                    {[
                       "Exécution sans vision stratégique",
                       "Gestion par des juniors ou stagiaires",
                       "Facturation au temps passé",
                       "Manque de transparence (Boîte noire)",
                       "Objectif : Dépenser votre budget"
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-2 text-slate-500">
                          <X className="shrink-0 text-slate-400 mt-1" size={10} />
                          <span className="font-medium text-[10px]">{item}</span>
                       </li>
                    ))}
                 </ul>
              </div>

              {/* NIVENTY (Blue/Impact) */}
              <div className="bg-slate-900 rounded-xl p-3 lg:p-4 shadow-2xl shadow-slate-900/20 relative overflow-hidden flex flex-col transform md:-translate-y-1">
                 
                 <div className="flex items-center gap-2 mb-3 relative z-10">
                    <div className="p-1.5 bg-niventy-600 rounded-full text-white shadow-lg shadow-niventy-600/40">
                       <Zap size={14} fill="currentColor" />
                    </div>
                    <div>
                       <h4 className="text-sm font-bold text-white uppercase">Niventy</h4>
                       <p className="text-[8px] text-niventy-300">Le modèle "Partenaire"</p>
                    </div>
                 </div>
                 
                 <ul className="space-y-2 flex-1 relative z-10">
                    {[
                       "Stratégie de croissance long terme",
                       "Expert Senior dédié à votre compte",
                       "Objectif Rentabilité (ROI & MER)",
                       "Transparence Totale (Accès BM)",
                       "Force de proposition créative (UGC/IA)"
                    ].map((item, i) => (
                       <li key={i} className="flex items-start gap-2 text-white">
                          <div className="mt-1 w-2.5 h-2.5 rounded-full bg-niventy-500 flex items-center justify-center shrink-0 shadow-lg shadow-niventy-500/50">
                             <Check size={7} strokeWidth={4} />
                          </div>
                          <span className="font-bold text-xs">{item}</span>
                       </li>
                    ))}
                 </ul>

                 <div className="mt-3 pt-3 border-t border-white/10 relative z-10">
                    <div className="text-center">
                       <p className="text-slate-400 text-[8px] mb-0.5">La différence ?</p>
                       <p className="text-sm font-bold text-white">"Nous gérons votre budget comme le nôtre."</p>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      </section>
    </>
  );
};
