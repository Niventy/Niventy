import React from 'react';

export const Hero: React.FC = () => {
  const services = [
    { label: 'MEDIA BUYING', color: 'bg-niventy-500 text-white' },
    { label: 'SOCIAL MEDIA', color: 'bg-blue-600 text-white' },
    { label: 'WEB DESIGN', color: 'bg-pop-500 text-white' },
  ];

  return (
    <section className="relative h-screen overflow-hidden flex flex-col items-center justify-center">

      {/* Full-bleed background photo */}
      <img
        src="https://res.cloudinary.com/dsiu7ntzq/image/upload/v1775735450/TEST_WEBSITE_NIVENTY_ocrxjt.png"
        alt="Team working"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay for impact */}
      <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0, 0, 0, 0.45)' }}></div>

      {/* Centered Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 md:px-10 w-full max-w-5xl">

        <h1 className="font-display font-bold tracking-display leading-[0.95] text-white drop-shadow-2xl">
          <span className="block text-3xl md:text-5xl lg:text-6xl">Le Marketing qui rend</span>
          <span className="block font-accent italic font-normal text-cream-100 text-5xl md:text-7xl lg:text-[120px] leading-[0.85] -mt-1 md:-mt-2">
            des comptes.
          </span>
        </h1>

        {/* Service Badges — tilted, centered below title */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-10 md:mt-12">
          {services.map((service, i) => (
            <span
              key={service.label}
              className={`px-5 py-2.5 rounded-sm text-sm font-bold uppercase tracking-widest ${service.color} inline-block shadow-lg`}
              style={{ transform: `rotate(${i % 2 === 0 ? -2 : 2}deg)` }}
            >
              {service.label}
            </span>
          ))}
        </div>

      </div>

    </section>
  );
};

