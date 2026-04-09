import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const services = [
    { label: 'MEDIA BUYING', color: 'bg-accent-500 text-white' },
    { label: 'SOCIAL MEDIA', color: 'bg-blue-600 text-white' },
    { label: 'WEB DESIGN', color: 'bg-emerald-600 text-white' },
    { label: 'ADS', color: 'bg-amber-500 text-white' },
  ];

  return (
    <section className="relative h-screen overflow-hidden flex flex-col">

      {/* Full-bleed background photo */}
      <img
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2670&auto=format&fit=crop"
        alt="Team working"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

      {/* Main Content - Centered */}
      <div className="flex-1 flex items-center justify-center relative z-10">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
          <div className="flex flex-col items-center text-center max-w-5xl mx-auto gap-8">

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-medium tracking-display leading-[0.9] text-white">
              <span>TRANSFORMEZ VOS</span> <br/>
              <span className="font-accent italic normal-case text-6xl md:text-8xl lg:text-9xl tracking-display-tight">Visiteurs,</span> <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 via-accent-300 to-white">EN CLIENTS FIDÈLES.</span>
            </h1>

            {/* Service Badges — Bizu style */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              {services.map((service) => (
                <span
                  key={service.label}
                  className={`px-5 py-2 rounded-sm text-xs font-bold uppercase tracking-widest ${service.color}`}
                >
                  {service.label}
                </span>
              ))}
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};

