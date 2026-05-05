import React from 'react';

interface Logo {
  src: string;
  alt: string;
}

interface Step {
  letter: string;
  title: string;
  description: string;
  logos?: Logo[];
  customVisual?: React.ReactNode;
  customBackground?: React.ReactNode;
}

const steps: Step[] = [
  {
    letter: 'a',
    title: 'Publicité Meta & Google Ads',
    description: 'Stratégie d\'acquisition multicanale sur Meta, Google et TikTok. Ciblage précis, tests d\'audiences continus et scaling progressif pour maximiser le ROAS.',
    logos: [
      { src: 'https://cdn.simpleicons.org/meta/0866FF', alt: 'Meta' },
      { src: 'https://cdn.simpleicons.org/googleads/4285F4', alt: 'Google Ads' },
      { src: 'https://cdn.simpleicons.org/tiktok/000000', alt: 'TikTok' },
    ]
  },
  {
    letter: 'b',
    title: 'Création de Contenu & UGC',
    description: 'Production de créatifs publicitaires (images, vidéos, UGC) à grande échelle. Stratégie d\'angles et hooks pour capter l\'attention, tests A/B systématiques.',
    customVisual: (
      <div className="flex items-center gap-2">
        <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md grayscale">
          <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop" alt="UGC creator" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
          <div className="absolute bottom-1 left-1 w-5 h-5 rounded-full bg-slate-900 flex items-center justify-center">
            <div className="w-0 h-0 border-l-[5px] border-l-white border-y-[3px] border-y-transparent ml-0.5" />
          </div>
        </div>
        <div className="hidden md:block relative w-16 h-20 rounded-2xl overflow-hidden border-2 border-white shadow-md -ml-4 grayscale">
          <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="UGC creator" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    ),
    customBackground: (
      <div className="absolute right-[18%] top-1/2 -translate-y-1/2 w-32 h-32 rounded-3xl overflow-hidden opacity-[0.10] rotate-6">
        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop" alt="" className="w-full h-full object-cover" />
      </div>
    )
  },
  {
    letter: 'c',
    title: 'Web Design & Conversion',
    description: 'Création de sites vitrines et landing pages optimisés pour la conversion. Boutiques Shopify & e-commerce performantes, design premium adapté à votre marque.',
    logos: [
      { src: 'https://cdn.simpleicons.org/shopify/95BF47', alt: 'Shopify' },
      { src: 'https://cdn.simpleicons.org/webflow/146EF5', alt: 'Webflow' },
      { src: 'https://cdn.simpleicons.org/framer/0055FF', alt: 'Framer' },
    ]
  },
  {
    letter: 'd',
    title: 'Tracking & Analytics',
    description: 'Installation Pixel, API Conversions et tracking server-side. Tableaux de bord personnalisés pour suivre vos KPIs, attribution précise et lecture de la contribution réelle.',
    logos: [
      { src: 'https://cdn.simpleicons.org/googleanalytics/E37400', alt: 'Google Analytics' },
      { src: 'https://cdn.simpleicons.org/googletagmanager/4285F4', alt: 'GTM' },
      { src: 'https://cdn.simpleicons.org/looker/4285F4', alt: 'Looker' },
    ]
  },
  {
    letter: 'e',
    title: 'Stratégie & Consulting',
    description: 'Audit complet de votre écosystème d\'acquisition. Plan d\'action sur-mesure avec objectifs chiffrés et accompagnement stratégique mensuel.',
    logos: [
      { src: 'https://cdn.simpleicons.org/notion/000000', alt: 'Notion' },
      { src: 'https://cdn.simpleicons.org/slack/4A154B', alt: 'Slack' },
      { src: 'https://cdn.simpleicons.org/googlemeet/00897B', alt: 'Meet' },
    ]
  },
  {
    letter: 'f',
    title: 'Community Management',
    description: 'Gestion de vos réseaux sociaux et calendrier éditorial. Stratégie d\'engagement, croissance organique, reporting mensuel et optimisation continue.',
    logos: [
      { src: 'https://cdn.simpleicons.org/instagram/E4405F', alt: 'Instagram' },
      { src: 'https://cdn.jsdelivr.net/npm/simple-icons@11/icons/linkedin.svg', alt: 'LinkedIn' },
      { src: 'https://cdn.simpleicons.org/tiktok/000000', alt: 'TikTok' },
    ]
  }
];

const BackgroundLogos: React.FC<{ logos: Logo[] }> = ({ logos }) => (
  <>
    {/* Only show one big subtle logo behind */}
    {logos.slice(0, 1).map((logo, i) => (
      <img
        key={i}
        src={logo.src}
        alt=""
        aria-hidden="true"
        className="absolute w-40 h-40 object-contain opacity-[0.06] pointer-events-none"
        style={{
          right: '20%',
          top: '50%',
          transform: 'translateY(-50%) rotate(-6deg)',
        }}
      />
    ))}
  </>
);

const RightSideLogos: React.FC<{ logos: Logo[] }> = ({ logos }) => (
  <div className="flex items-center gap-2">
    {logos.map((logo, i) => (
      <div key={i} className="w-10 h-10 md:w-11 md:h-11 rounded-xl bg-white border border-slate-200 shadow-sm flex items-center justify-center">
        <img
          src={logo.src}
          alt={logo.alt}
          className="w-6 h-6 md:w-7 md:h-7 object-contain"
          style={{ filter: 'brightness(0)' }}
        />
      </div>
    ))}
  </div>
);

export const Method: React.FC = () => {
  return (
    <section id="services" className="py-20 px-4 md:px-6 bg-cream-100">
      <div className="max-w-[1100px] mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="font-accent italic text-slate-500 text-2xl md:text-3xl mb-4">
            ( Nos services )
          </p>
          <h2 className="text-3xl md:text-5xl lg:text-[64px] font-display font-bold text-slate-900 tracking-display leading-[1.05]">
            Ce que nous faisons réellement.
          </h2>
        </div>

        {/* Steps */}
        <div className="space-y-3 md:space-y-4 max-w-3xl mx-auto">
          {steps.map((step) => (
            <div
              key={step.letter}
              className="relative bg-white hover:bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 group shadow-sm hover:shadow-md"
            >
              {/* Background colored logos */}
              <div className="absolute inset-0 pointer-events-none">
                {step.customBackground ? step.customBackground : step.logos && <BackgroundLogos logos={step.logos} />}
              </div>

              {/* Content */}
              <div className="relative p-7 md:p-9">
                <div className="flex items-start gap-6">
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl text-slate-900 mb-3 tracking-tight leading-tight">
                      {step.title}
                    </h3>
                    <p className="text-slate-500 text-sm md:text-base leading-relaxed max-w-xl">
                      {step.description}
                    </p>
                  </div>
                  <div className="shrink-0 hidden sm:flex items-center self-center">
                    {step.customVisual ? step.customVisual : step.logos && <RightSideLogos logos={step.logos} />}
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
