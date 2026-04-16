import React from 'react';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  const services = [
    { label: 'MEDIA BUYING', color: 'bg-niventy-500 text-white' },
    { label: 'SOCIAL MEDIA', color: 'bg-blue-600 text-white' },
    { label: 'WEB DESIGN', color: 'bg-pop-500 text-white' },
  ];

  return (
    <section className="relative h-screen overflow-hidden flex flex-col">

      {/* Full-bleed background photo */}
      <img
        src="https://res.cloudinary.com/dsiu7ntzq/image/upload/v1775735450/TEST_WEBSITE_NIVENTY_ocrxjt.png"
        alt="Team working"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"></div>

      {/* Main Content - Lower third */}
      <div className="flex-1 flex items-end pb-24 md:pb-32 relative z-10">
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10">
          <div className="flex flex-col items-start text-left max-w-5xl gap-8">

            <h1 className="text-5xl md:text-7xl lg:text-9xl font-display font-bold tracking-display leading-[0.85] text-white">
              <span>Votre audience</span> <br/>
              <span className="text-white">nous attend.</span>
            </h1>

            {/* Service Badges — tilted like Bizu */}
            <div className="flex flex-wrap items-start justify-start gap-3">
              {services.map((service, i) => (
                <span
                  key={service.label}
                  className={`px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest ${service.color} inline-block`}
                  style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
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

