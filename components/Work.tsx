import React from 'react';

export const Work: React.FC = () => {
  return (
    <section id="work" className="py-10 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto bg-dark-950 rounded-3xl overflow-hidden">
      {/* Dark statement header + ROI table */}
      <div className="py-16 md:py-20 text-center px-8 md:px-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-niventy-500 text-white text-xs font-bold uppercase tracking-widest mb-8">
          NOS RÉSULTATS
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-white tracking-display leading-[1.05] max-w-4xl mx-auto mb-6">
          Pas pour tout le monde. Juste pour les entreprises qui veulent être <span className="text-niventy-400">impossibles à ignorer.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Le paid media ce n'est pas dépenser plus, c'est dépenser avec un objectif. Quand les ads sont construites sur un ciblage clair, des créatifs forts et une optimisation constante, l'investissement se transforme en croissance.
        </p>

        {/* ROI Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto mb-16">
          <table className="w-full text-center">
            <thead>
              <tr>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Client</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Budget</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">CPL/CPA</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Leads</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Closing</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Panier</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">Revenus</span></th>
                <th className="py-4 px-3"><span className="inline-flex items-center justify-center w-full h-[25px] px-[14px] bg-[#393b41] text-[11px] font-bold text-slate-300 uppercase tracking-widest whitespace-nowrap">ROI</span></th>
              </tr>
            </thead>
            <tbody className="text-white/60 text-sm">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Salle de sport</td>
                <td className="py-4 px-5">2 000€</td>
                <td className="py-4 px-5">3,52€</td>
                <td className="py-4 px-5">568</td>
                <td className="py-4 px-5">7,40%</td>
                <td className="py-4 px-5">360€</td>
                <td className="py-4 px-5">15 120€</td>
                <td className="py-4 px-5">x7.5</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Boutique enfant</td>
                <td className="py-4 px-5">2 500€</td>
                <td className="py-4 px-5">9,50€</td>
                <td className="py-4 px-5">263</td>
                <td className="py-4 px-5">—</td>
                <td className="py-4 px-5">39,92€</td>
                <td className="py-4 px-5">10 500€</td>
                <td className="py-4 px-5">x4.20</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Franchise restaurant</td>
                <td className="py-4 px-5">4 000€</td>
                <td className="py-4 px-5">22€</td>
                <td className="py-4 px-5">182</td>
                <td className="py-4 px-5">0,55%</td>
                <td className="py-4 px-5">75 000€</td>
                <td className="py-4 px-5">75 000€</td>
                <td className="py-4 px-5">x18.75</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Aménagement extérieur</td>
                <td className="py-4 px-5">4 000€</td>
                <td className="py-4 px-5">8€</td>
                <td className="py-4 px-5">500</td>
                <td className="py-4 px-5">2,4%</td>
                <td className="py-4 px-5">10 000€</td>
                <td className="py-4 px-5">120 000€</td>
                <td className="py-4 px-5">x30</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Tournée d'artistes</td>
                <td className="py-4 px-5">11 500€</td>
                <td className="py-4 px-5">4,21€</td>
                <td className="py-4 px-5">2 731</td>
                <td className="py-4 px-5">—</td>
                <td className="py-4 px-5">26€</td>
                <td className="py-4 px-5">71 006€</td>
                <td className="py-4 px-5">x6.17</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-4 px-5 text-white font-medium">Cosmétiques B2B</td>
                <td className="py-4 px-5">2 400€</td>
                <td className="py-4 px-5">7€</td>
                <td className="py-4 px-5">343</td>
                <td className="py-4 px-5">4,3%</td>
                <td className="py-4 px-5">600€</td>
                <td className="py-4 px-5">8 880€</td>
                <td className="py-4 px-5">x3.7</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-white/30 text-sm mb-2">Chez Niventy, chaque euro investi travaille pour vous.</p>

        {/* Stats Donut Charts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto mt-16">
          {/* E-commerce - ROI x5 */}
          <div className="flex flex-col items-center group">
            <div className="relative w-36 h-36 mb-5">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradEcom)" strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${(83 / 100) * 314} 314`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradEcom" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#10b981" />
                    <stop offset="100%" stopColor="#34d399" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">x5</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">ROI</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">E-Commerce</h4>
            <p className="text-white/40 text-xs text-center leading-relaxed">Jusqu'à x5 de retour<br/>sur investissement pub</p>
          </div>

          {/* CPA -50% */}
          <div className="flex flex-col items-center group">
            <div className="relative w-36 h-36 mb-5">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradCpa)" strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${(50 / 100) * 314} 314`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradCpa" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f59e0b" />
                    <stop offset="100%" stopColor="#fbbf24" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">-50%</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">CPA</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Coût d'Acquisition</h4>
            <p className="text-white/40 text-xs text-center leading-relaxed">Réduction CPA de 50%<br/>en scalant le budget</p>
          </div>

          {/* Lead Gen - CPL -70% */}
          <div className="flex flex-col items-center group">
            <div className="relative w-36 h-36 mb-5">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradLead)" strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${(70 / 100) * 314} 314`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradLead" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#ec4899" />
                    <stop offset="100%" stopColor="#f472b6" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">-70%</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">CPL</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Lead Generation</h4>
            <p className="text-white/40 text-xs text-center leading-relaxed">Jusqu'à 70% de réduction<br/>du coût par lead</p>
          </div>

          {/* Notoriété - 60K+ abonnés */}
          <div className="flex flex-col items-center group">
            <div className="relative w-36 h-36 mb-5">
              <svg viewBox="0 0 120 120" className="w-full h-full -rotate-90">
                <circle cx="60" cy="60" r="50" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="12" />
                <circle cx="60" cy="60" r="50" fill="none" stroke="url(#gradNotoriete)" strokeWidth="12" strokeLinecap="round"
                  strokeDasharray={`${(75 / 100) * 314} 314`}
                  className="transition-all duration-1000"
                />
                <defs>
                  <linearGradient id="gradNotoriete" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#6366f1" />
                    <stop offset="100%" stopColor="#818cf8" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-3xl font-bold text-white">3M+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">reach</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Notoriété</h4>
            <p className="text-white/40 text-xs text-center leading-relaxed">Jusqu'à 3M d'impressions<br/>sur nos campagnes</p>
          </div>
        </div>
      </div>

      </div>
    </section>
  );
};


