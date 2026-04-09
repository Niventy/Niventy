import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export const Work: React.FC = () => {
  const projects = [
    {
      title: "Cas Client Skello",
      category: "SaaS abonnements & services B2B",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Skello_logo.png/800px-Skello_logo.png?20201027150000",
      logoWidth: "w-20",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      colSpan: "md:col-span-1"
    },
    {
      title: "Cas Client Lafaurie",
      category: "Mode bijoux & accessoires",
      logo: "Lafaurie",
      logoWidth: "w-auto",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=2670&auto=format&fit=crop",
      colSpan: "md:col-span-1"
    },
    {
      title: "Cas Client Les Others",
      category: "Media & Outdoor",
      logo: "les others",
      logoWidth: "w-auto font-serif",
      image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2670&auto=format&fit=crop",
      colSpan: "md:col-span-1"
    },
    {
      title: "Cas Client Delsey",
      category: "Produits durables",
      logo: "DELSEY",
      logoWidth: "w-auto font-bold tracking-widest",
      image: "https://images.unsplash.com/photo-1565538810643-b5bdb714032a?q=80&w=2574&auto=format&fit=crop",
      colSpan: "md:col-span-1"
    }
  ];

  return (
    <section id="work" className="py-20 min-h-[500px] bg-white relative overflow-hidden flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
           <div>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 uppercase">
                 Nos derniers <span className="text-niventy-600">Uses Cases</span>
              </h2>
           </div>
           
           <Button className="bg-slate-900 hover:bg-slate-800 text-white border-none px-6 h-9 text-xs">
              Voir les cases
           </Button>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
           {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative h-[300px] rounded-2xl overflow-hidden bg-slate-100 shadow-md transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                 {/* Full Background Image */}
                 <img 
                   src={project.image} 
                   alt={project.title} 
                   className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                 />
                 
                 {/* Gradient Overlay for Text Readability */}
                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>

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
                    <div className="inline-block border border-white/50 rounded-full px-3 py-1 text-[9px] font-medium text-white backdrop-blur-md mb-2 group-hover:bg-white/10 transition-colors">
                       {project.category}
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-base font-bold text-white group-hover:text-niventy-200 transition-colors uppercase">
                       {project.title}
                    </h3>
                 </div>
              </div>
           ))}
        </div>

      </div>
    </section>
  );
};