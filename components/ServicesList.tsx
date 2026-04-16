import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string[];
  linkText: string;
}

const services: Service[] = [
  {
    id: '01',
    title: 'PUBLICITÉ META & GOOGLE ADS',
    description: [
      'Stratégie d\'acquisition multicanale sur Meta, Google et TikTok.',
      'Ciblage précis et tests d\'audiences continus pour maximiser le ROAS.',
      'Scaling progressif tout en maintenant la rentabilité.'
    ],
    linkText: 'EN SAVOIR PLUS'
  },
  {
    id: '02',
    title: 'CRÉATION DE CONTENU & UGC',
    description: [
      'Production de créatifs publicitaires (images, vidéos, UGC) à grande échelle.',
      'Stratégie d\'angles et hooks pour capter l\'attention.',
      'Tests A/B systématiques pour identifier les meilleures performances.'
    ],
    linkText: 'EN SAVOIR PLUS'
  },
  {
    id: '03',
    title: 'WEB DESIGN & CONVERSION',
    description: [
      'Création de sites vitrines et landing pages optimisés pour la conversion.',
      'Boutiques Shopify & e-commerce performantes.',
      'Design premium adapté à votre image de marque.'
    ],
    linkText: 'EN SAVOIR PLUS'
  },
  {
    id: '04',
    title: 'TRACKING & ANALYTICS',
    description: [
      'Installation Pixel, API Conversions et tracking server-side.',
      'Tableaux de bord personnalisés pour suivre vos KPIs.',
      'Attribution précise et lecture de la contribution réelle.'
    ],
    linkText: 'EN SAVOIR PLUS'
  },
  {
    id: '05',
    title: 'STRATÉGIE & CONSULTING',
    description: [
      'Audit complet de votre écosystème d\'acquisition.',
      'Plan d\'action sur-mesure avec objectifs chiffrés.',
      'Accompagnement stratégique mensuel.'
    ],
    linkText: 'EN SAVOIR PLUS'
  },
  {
    id: '06',
    title: 'COMMUNITY MANAGEMENT',
    description: [
      'Gestion de vos réseaux sociaux et calendrier éditorial.',
      'Stratégie d\'engagement et croissance organique.',
      'Reporting mensuel et optimisation continue.'
    ],
    linkText: 'EN SAVOIR PLUS'
  }
];

export const ServicesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('02');

  return (
    <section className="bg-white text-slate-900 py-16 relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Title — full width above */}
        <div className="mb-10">
          <p className="font-accent italic text-slate-500 text-2xl md:text-3xl mb-6">Services</p>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold tracking-display leading-[1.05] mb-2 text-slate-900">
            Ce que nous faisons réellement.
          </h2>
        </div>

        {/* Services List — full width */}
        <div className="space-y-0 divide-y divide-slate-200 border-t border-slate-200 border-b">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="group relative"
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <div className={`py-1.5 transition-all duration-300 cursor-pointer ${activeId === service.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold uppercase tracking-tight flex-1 transition-all duration-500 ${activeId === service.id ? 'text-amber-400 blur-none' : 'text-slate-300 blur-[0.5px]'}`}>
                        {service.title}
                        <sup className="text-xs ml-1.5 font-normal text-slate-300">{service.id}</sup>
                      </h3>
                      <ArrowUpRight
                        className={`transform transition-transform duration-300 ${activeId === service.id ? 'rotate-0 text-amber-400' : 'rotate-45 text-slate-300'}`}
                        size={14}
                      />
                    </div>

                    {/* Expandable Content */}
                    <div
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === service.id ? 'max-h-64 opacity-100 mt-1.5' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0 md:pl-4 border-l-2 border-amber-400 ml-1">
                        <ul className="space-y-1 text-slate-500 text-sm font-medium">
                          {service.description.map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="w-2 h-[1px] bg-amber-400 mt-1.5 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-end justify-start md:justify-end">
                          <a href="#" className="inline-flex items-center gap-1.5 text-sm font-bold tracking-widest uppercase text-amber-400 hover:text-amber-500 transition-colors">
                            En savoir plus <ArrowUpRight size={12} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </section>
  );
};


