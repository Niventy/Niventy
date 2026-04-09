import React from 'react';

const photos = [
  'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1553877522-43269d4ea984?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1531973576160-7125cd663d86?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=400&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1560472355-536de3962603?q=80&w=400&auto=format&fit=crop',
];

export const PhotoMarquee: React.FC = () => {
  return (
    <section className="py-2 bg-white overflow-hidden">
      <div className="relative">
        {/* Gradient edges */}
        <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee-photos hover:[animation-play-state:paused] whitespace-nowrap">
          {/* First set */}
          <div className="flex gap-3 px-1.5">
            {photos.map((photo, i) => (
              <div key={`a-${i}`} className="w-[200px] h-[140px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={photo} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
          {/* Duplicate for loop */}
          <div className="flex gap-3 px-1.5">
            {photos.map((photo, i) => (
              <div key={`b-${i}`} className="w-[200px] h-[140px] rounded-xl overflow-hidden flex-shrink-0">
                <img src={photo} alt="" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

