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


