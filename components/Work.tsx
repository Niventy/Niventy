import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Work: React.FC = () => {
  const projects = [
    {
      title: "Cas Client Skello",
      category: "SaaS abonnements & services B2B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Skello_logo.png/800px-Skello_logo.png?20201027150000",
      logoWidth: "w-20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      accent: "bg-emerald-500/90 text-white"
    },
    {
      title: "Cas Client Lafaurie",
      category: "Mode bijoux & accessoires",
      logo: "Lafaurie",
      logoWidth: "w-auto",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      accent: "bg-fuchsia-500/80 text-white"
    },
    {
      title: "Cas Client Les Others",
      category: "Media & Outdoor",
      logo: "les others",
      logoWidth: "w-auto font-serif",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      accent: "bg-amber-500/90 text-white"
    },
    {
      title: "Cas Client Delsey",
      category: "Produits durables",
      logo: "DELSEY",
      logoWidth: "w-auto font-bold tracking-widest",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574&auto=format&fit=crop",
      colSpan: "md:col-span-1",
      accent: "bg-blue-600/90 text-white"
    }
  ];

  return (
    <section id="work" className="py-10 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto bg-dark-950 rounded-3xl overflow-hidden">
      {/* Dark statement header + ROI table */}
      <div className="py-16 md:py-20 text-center px-8 md:px-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-sm bg-accent-500 text-white text-xs font-bold uppercase tracking-widest mb-8">
          NOS RÉSULTATS
        </div>
        <h2 className="text-3xl md:text-5xl lg:text-[56px] font-display font-bold text-white tracking-display leading-[1.05] max-w-4xl mx-auto mb-6">
          Pas pour tout le monde. Juste pour les marques qui veulent être <span className="font-accent italic normal-case text-accent-400 font-normal">impossibles à ignorer.</span>
        </h2>
        <p className="text-white/40 text-sm md:text-base max-w-2xl mx-auto mb-12">
          Le paid media ce n'est pas dépenser plus, c'est dépenser avec un objectif. Quand les ads sont construites sur un ciblage clair, des créatifs forts et une optimisation constante, l'investissement se transforme en croissance.
        </p>

        {/* ROI Table */}
        <div className="max-w-4xl mx-auto overflow-x-auto mb-16">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b border-white/10">
                <th className="py-3 px-4 text-xs font-bold text-white uppercase tracking-wider">Client</th>
                <th className="py-3 px-4 text-xs font-bold text-white uppercase tracking-wider">Investissement</th>
                <th className="py-3 px-4 text-xs font-bold text-white uppercase tracking-wider">Revenus</th>
                <th className="py-3 px-4 text-xs font-bold text-white uppercase tracking-wider">Leads</th>
                <th className="py-3 px-4 text-xs font-bold text-white uppercase tracking-wider">ROAS</th>
              </tr>
            </thead>
            <tbody className="text-white/60 text-sm">
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">Skello</td>
                <td className="py-3 px-4">3 000€</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">26 512€</td>
                <td className="py-3 px-4">146</td>
                <td className="py-3 px-4 text-accent-400 font-bold">8.84</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">Lafaurie</td>
                <td className="py-3 px-4">3 000€</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">32 415€</td>
                <td className="py-3 px-4">107</td>
                <td className="py-3 px-4 text-accent-400 font-bold">10.81</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">Les Others</td>
                <td className="py-3 px-4">3 000€</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">31 021€</td>
                <td className="py-3 px-4">104</td>
                <td className="py-3 px-4 text-accent-400 font-bold">10.34</td>
              </tr>
              <tr className="border-b border-white/5 hover:bg-white/5 transition-colors">
                <td className="py-3 px-4 text-white font-medium">Delsey</td>
                <td className="py-3 px-4">1 500€</td>
                <td className="py-3 px-4 text-emerald-400 font-medium">12 817€</td>
                <td className="py-3 px-4">47</td>
                <td className="py-3 px-4 text-accent-400 font-bold">8.54</td>
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
                <span className="text-3xl font-bold text-white">60K+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-wider">abonnés</span>
              </div>
            </div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-1">Notoriété</h4>
            <p className="text-white/40 text-xs text-center leading-relaxed">Gestion de comptes avec<br/>+60 000 abonnés réels</p>
          </div>
        </div>
      </div>

      {/* Cases grid */}
      <div className="pb-16 px-8 md:px-16 relative z-10">

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {projects.map((project, index) => (
              <div
                key={index}
                className="group relative h-[300px] rounded-2xl overflow-hidden bg-dark-950 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                 {/* Full Background Image */}
                 <img
                   src={project.image}
                   alt={project.title}
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />

                 {/* Gradient Overlay for Text Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-dark-950/90 via-dark-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

                 {/* Top Left: Logo Badge (White Pill) */}
                 <div className="absolute top-4 left-4 bg-white py-1.5 px-3 rounded-md shadow-md flex items-center justify-center min-w-[80px] h-9">
                    {project.logo.includes('http') ? (
                       <img src={project.logo} alt="logo" className="h-4 w-auto object-contain" />
                    ) : (
                       <span className={`text-slate-900 font-bold text-sm ${project.logoWidth}`}>{project.logo}</span>
                    )}
                 </div>

                 {/* Bottom Content */}
                 <div className="absolute bottom-4 left-4 right-4">
                    {/* Category Pill (Outlined) */}
                    <div className={`inline-block rounded-full px-3 py-1 text-xs font-bold backdrop-blur-md mb-2 ${project.accent}`}>
                       {project.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-accent-200 transition-colors uppercase">
                       {project.title}
                    </h3>
                 </div>
              </div>
           ))}
        </div>

      </div>
      </div>
    </section>
  );
};


