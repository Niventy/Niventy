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
    title: 'TARGETED ADVERTISING + GOOGLE ADS',
    description: [
      'We build long-term relationships with your audience through targeted ads.',
      'We create engaging content that increases brand awareness.',
      'We regularly analyze audience response to ensure effectiveness.'
    ],
    linkText: 'ORDER A SERVICE'
  },
  {
    id: '02',
    title: 'SMM + CONTENT MARKETING',
    description: [
      'We build long-term relationships with your audience through social media',
      'We create engaging content that increases brand awareness, builds loyalty, and motivates customers to return',
      'We regularly analyze audience response to ensure that content is as effective as possible'
    ],
    linkText: 'ORDER A SERVICE'
  },
  {
    id: '03',
    title: 'SEO PROMOTION',
    description: [
      'We optimize your website to rank higher in search results.',
      'We improve visibility and drive organic traffic.',
      'We focus on long-term growth and sustainable results.'
    ],
    linkText: 'ORDER A SERVICE'
  },
  {
    id: '04',
    title: 'EMAIL MARKETING',
    description: [
      'We design and execute effective email campaigns.',
      'We nurture leads and convert them into customers.',
      'We analyze open rates and click-through rates.'
    ],
    linkText: 'ORDER A SERVICE'
  },
  {
    id: '05',
    title: 'COMPREHENSIVE MARKETING SERVICES',
    description: [
      'We offer a full suite of marketing services tailored to your needs.',
      'We integrate strategies for maximum impact.',
      'We provide end-to-end solutions for your business.'
    ],
    linkText: 'ORDER A SERVICE'
  },
  {
    id: '06',
    title: 'ANALYTICS & OPTIMIZATION',
    description: [
      'We track and analyze key performance indicators.',
      'We optimize campaigns based on data-driven insights.',
      'We ensure continuous improvement and ROI.'
    ],
    linkText: 'ORDER A SERVICE'
  }
];

export const ServicesList: React.FC = () => {
  const [activeId, setActiveId] = useState<string | null>('02');

  return (
    <section className="bg-white text-slate-900 py-20 min-h-[500px] relative overflow-hidden flex items-center justify-center">
      {/* Background Texture/Gradient */}
      <div className="absolute inset-0 opacity-30 mix-blend-multiply pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Blue to White Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-50 via-white to-blue-50/50 pointer-events-none"></div>
      
      {/* Foggy Blue Glows (matching the "spotlight" feel of the reference but in blue/light) */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[60%] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none mix-blend-multiply"></div>
      <div className="absolute top-1/4 right-0 w-[40%] h-[40%] bg-blue-400/5 blur-[80px] rounded-full pointer-events-none"></div>

      <div className="max-w-[1200px] mx-auto w-full px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8">
          
          {/* Left Column: Title */}
          <div className="lg:col-span-4">
            <div className="sticky top-20">
              <div className="inline-flex items-center gap-2 px-2 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[8px] font-bold uppercase tracking-wider mb-1.5">
                <ArrowUpRight size={10} /> NOS SERVICES
              </div>
              <h2 className="text-lg md:text-xl font-bold tracking-tighter leading-[0.9] mb-2 text-slate-900 uppercase">
                <span className="blur-[1px] hover:blur-none transition-all duration-500">CE QUE NOUS</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-[1px] hover:blur-none transition-all duration-500">FAISONS.</span>
              </h2>
            </div>
          </div>

          {/* Right Column: Services List */}
          <div className="lg:col-span-8">
            <div className="space-y-0 divide-y divide-slate-200 border-t border-slate-200 border-b">
              {services.map((service) => (
                <div 
                  key={service.id} 
                  className="group relative"
                  onMouseEnter={() => setActiveId(service.id)}
                >
                  <div className={`py-1.5 transition-all duration-300 cursor-pointer ${activeId === service.id ? 'opacity-100' : 'opacity-40 hover:opacity-100'}`}>
                    <div className="flex items-start justify-between gap-3">
                      <h3 className={`text-sm md:text-base font-bold uppercase tracking-tight flex-1 transition-all duration-500 ${activeId === service.id ? 'text-blue-600 blur-none' : 'text-slate-400 blur-[0.5px]'}`}>
                        {service.title}
                        <sup className="text-[9px] ml-1.5 font-normal text-slate-300">{service.id}</sup>
                      </h3>
                      <ArrowUpRight 
                        className={`transform transition-transform duration-300 ${activeId === service.id ? 'rotate-0 text-blue-600' : 'rotate-45 text-slate-300'}`} 
                        size={14} 
                      />
                    </div>
                    
                    {/* Expandable Content */}
                    <div 
                      className={`overflow-hidden transition-all duration-500 ease-in-out ${activeId === service.id ? 'max-h-64 opacity-100 mt-1.5' : 'max-h-0 opacity-0'}`}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2 pl-0 md:pl-4 border-l-2 border-blue-600 ml-1">
                        <ul className="space-y-1 text-slate-500 text-[10px] font-medium">
                          {service.description.map((item, index) => (
                            <li key={index} className="flex gap-2">
                              <span className="w-2 h-[1px] bg-blue-400 mt-1.5 shrink-0"></span>
                              {item}
                            </li>
                          ))}
                        </ul>
                        <div className="flex items-end justify-start md:justify-end">
                          <a href="#" className="inline-flex items-center gap-1.5 text-[9px] font-bold tracking-widest uppercase text-blue-600 hover:text-blue-800 transition-colors">
                            Order a service <ArrowUpRight size={8} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
