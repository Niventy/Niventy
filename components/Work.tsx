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
      {/* Dark statement header */}
      <div className="py-20 md:py-24 text-center">
        <div className="px-8 md:px-16">
          <p className="font-accent italic text-white/40 text-lg md:text-xl mb-6">Cases</p>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-white tracking-display leading-[1.05] max-w-4xl mx-auto">
            Pas pour tout le monde. Juste pour les marques qui veulent être <span className="font-accent italic normal-case text-accent-400 font-normal">impossibles à ignorer.</span>
          </h2>
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


