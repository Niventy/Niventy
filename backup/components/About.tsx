import React from 'react';
import { Button } from './Button';
import { TrendingUp, Palette, Target, Lightbulb, Share2, Search, Layers, Mail, Globe, Brain, Zap, Monitor, Smartphone, Wand2, Users } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 min-h-[500px] bg-white flex items-center justify-center">
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold text-slate-900 tracking-tight mb-3 uppercase">
            Une croissance structurée. <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-niventy-600 to-niventy-400">Pas une dépendance à l’algorithme.</span>
          </h2>
          <p className="text-sm md:text-base text-slate-600 leading-relaxed font-medium">
            Nous ne gérons pas des campagnes. <br className="hidden md:block"/>
            Nous concevons des architectures d’acquisition durables.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
          {/* Card 1: Pilotage & Contribution (Blue Theme) */}
          <div className="group rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-niventy-500/10 transition-all duration-500 overflow-hidden flex flex-col h-full">
            
            {/* Visual Part: Strategic Architecture Animation */}
            <div className="h-[280px] relative bg-gradient-to-br from-niventy-50 via-white to-blue-50 overflow-hidden flex items-center justify-center">
                {/* Background Technical Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:16px_16px]"></div>
                
                {/* Container for the Architecture */}
                <div className="relative w-full max-w-[400px] h-[240px] flex items-center justify-between px-4 md:px-6">
                    
                    {/* CSS for the flowing animation */}
                    <style>{`
                      @keyframes flow-dash {
                        to {
                          stroke-dashoffset: -40;
                        }
                      }
                    `}</style>

                    {/* Left Column: The 4 Sources (Inputs) */}
                    <div className="flex flex-col justify-between h-[200px] z-20 w-28">
                        
                        {/* Source 1: Social */}
                        <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1.5 transform transition-transform duration-300 hover:scale-105 hover:border-blue-200">
                            <div className="w-6 h-6 rounded-md bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                <Share2 size={12} />
                            </div>
                            <div className="text-[8px] font-bold text-slate-700 leading-tight">Paid<br/>Social</div>
                        </div>

                        {/* Source 2: Search */}
                        <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1.5 transform transition-transform duration-300 hover:scale-105 hover:border-blue-200">
                            <div className="w-6 h-6 rounded-md bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                <Search size={12} />
                            </div>
                            <div className="text-[8px] font-bold text-slate-700 leading-tight">Paid<br/>Search</div>
                        </div>

                        {/* Source 3: Organic */}
                        <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1.5 transform transition-transform duration-300 hover:scale-105 hover:border-blue-200">
                            <div className="w-6 h-6 rounded-md bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                                <Globe size={12} />
                            </div>
                            <div className="text-[8px] font-bold text-slate-700 leading-tight">SEO &<br/>Organique</div>
                        </div>

                        {/* Source 4: Owned */}
                        <div className="bg-white p-1.5 rounded-lg shadow-sm border border-slate-100 flex items-center gap-1.5 transform transition-transform duration-300 hover:scale-105 hover:border-blue-200">
                            <div className="w-6 h-6 rounded-md bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                <Mail size={12} />
                            </div>
                            <div className="text-[8px] font-bold text-slate-700 leading-tight">Owned<br/>(Email)</div>
                        </div>
                    </div>

                    {/* SVG Connections (The Architecture Lines) */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none z-10" style={{ overflow: 'visible' }}>
                        <defs>
                            <linearGradient id="gradientFlow" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#bfdbfe" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#3b82f6" stopOpacity="1" />
                            </linearGradient>
                        </defs>

                        {[25, 80, 135, 190].map((y, i) => (
                           <g key={i}>
                             <path 
                                d={`M 120 ${y} C 160 ${y}, 160 110, 220 110`} 
                                fill="none" 
                                stroke="#e2e8f0" 
                                strokeWidth="1.5" 
                             />
                             <path 
                                d={`M 120 ${y} C 160 ${y}, 160 110, 220 110`} 
                                fill="none" 
                                stroke="url(#gradientFlow)" 
                                strokeWidth="1.5" 
                                strokeDasharray="4 4"
                                className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                                style={{ animation: `flow-dash 1.5s linear infinite`, animationDelay: `${i * 0.2}s` }}
                             />
                           </g>
                        ))}
                    </svg>

                    {/* Right Column: The Brain (Central Intelligence) */}
                    <div className="z-20 ml-auto mr-0 md:mr-4 relative">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse-slow"></div>

                        <div className="bg-white p-4 rounded-2xl shadow-xl border border-blue-50 w-40 relative text-center group-hover:-translate-y-1 transition-transform duration-500">
                             <div className="w-10 h-10 bg-gradient-to-br from-niventy-600 to-niventy-500 rounded-xl flex items-center justify-center text-white shadow-lg shadow-niventy-500/30 mx-auto -mt-9 mb-3 relative z-10 border-2 border-white">
                                 <Brain size={20} />
                             </div>

                             <div className="text-[8px] font-bold text-slate-400 uppercase tracking-widest mb-0.5">Orchestration</div>
                             <div className="text-[11px] font-bold text-slate-800 mb-3 px-1">Stratégique</div>

                             <div className="w-full h-px bg-slate-100 mb-3"></div>

                             <div className="space-y-0.5">
                                <div className="text-[9px] font-medium text-slate-500">Rentabilité</div>
                                <div className="text-xl font-bold text-niventy-600 tracking-tight flex items-center justify-center gap-1">
                                   +35% <Zap size={12} className="fill-current" />
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Text Part */}
            <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <span className="text-niventy-600 font-bold text-[10px] uppercase tracking-widest mb-3">PILOTAGE & CONTRIBUTION</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 leading-tight uppercase">
                    Croissance <span className="text-niventy-600">structurée</span>.
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                    Nous structurons votre acquisition pour qu’elle contribue réellement à votre développement global. 
                    Tracking maîtrisé, lecture de la contribution réelle, arbitrages stratégiques.
                </p>
                <div>
                    <Button variant="secondary" className="bg-white border-slate-200 text-slate-700 hover:border-niventy-200 hover:text-niventy-600 hover:bg-niventy-50/30 w-full md:w-auto h-9 text-[11px] px-4">
                        Analyser mon acquisition
                    </Button>
                </div>
            </div>
          </div>

          {/* Card 2: Stratégie & Production (Creative Studio) */}
          <div className="group rounded-[1.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-500 overflow-hidden flex flex-col h-full">
             
             {/* Visual Part: Creative Studio */}
             <div className="h-[280px] relative bg-gradient-to-br from-indigo-50 via-white to-purple-50 overflow-hidden flex items-center justify-center">
                
                {/* Background Accents */}
                <div className="absolute top-10 right-10 w-48 h-48 bg-purple-200/30 rounded-full blur-[40px]"></div>
                <div className="absolute bottom-10 left-10 w-48 h-48 bg-indigo-200/30 rounded-full blur-[40px]"></div>

                {/* Central Composition */}
                <div className="relative z-10 w-full max-w-[360px] h-[220px]">
                    
                    {/* Layer 1: Desktop / Webdesign (Back) */}
                    <div className="absolute top-2 left-2 right-8 h-[160px] bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden transform -rotate-2 opacity-90 group-hover:-translate-x-2 group-hover:-rotate-3 transition-all duration-500 z-10">
                         {/* Fake Browser Header */}
                         <div className="h-5 bg-slate-50 border-b border-slate-100 flex items-center px-2 gap-1">
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                            <div className="text-[7px] text-slate-400 font-mono ml-1">niventy.com/studio</div>
                         </div>
                         
                         {/* Interface Content */}
                         <div className="flex h-[135px]">
                             <div className="w-[100px] bg-slate-50/50 border-r border-slate-100 p-2 flex flex-col gap-1.5">
                                 <div className="text-[7px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">Framework</div>
                                 <div className="space-y-1">
                                     <div className="flex items-center gap-1.5 p-1 bg-white rounded border border-slate-200">
                                         <div className="w-4 h-4 rounded bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                                             <Zap size={8} />
                                         </div>
                                         <div className="text-[7px] font-bold text-slate-700">Hook</div>
                                     </div>
                                     <div className="flex items-center gap-1.5 p-1 bg-white rounded border border-slate-200">
                                         <div className="w-4 h-4 rounded bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                             <Target size={8} />
                                         </div>
                                         <div className="text-[7px] font-bold text-slate-700">Angle</div>
                                     </div>
                                 </div>
                             </div>
                             <div className="flex-1 bg-white p-2">
                                 <div className="w-full h-full bg-slate-50 rounded border border-dashed border-slate-200 flex flex-col items-center justify-center gap-1">
                                     <div className="w-6 h-6 rounded-full bg-slate-100 flex items-center justify-center">
                                         <div className="w-3 h-3 rounded-sm bg-slate-300"></div>
                                     </div>
                                     <div className="h-1 w-8 bg-slate-200 rounded-full"></div>
                                 </div>
                             </div>
                         </div>
                    </div>

                    {/* Layer 2: Mobile / Ads (Front) */}
                    <div className="absolute top-6 right-4 w-[100px] h-[170px] bg-slate-900 rounded-[15px] shadow-xl border-[4px] border-slate-800 transform rotate-3 group-hover:rotate-6 group-hover:translate-x-1 transition-all duration-500 overflow-hidden z-30">
                        <div className="w-full h-full bg-gradient-to-br from-indigo-600 to-purple-600 relative flex flex-col items-center justify-center text-white">
                            <Zap size={16} className="fill-current animate-bounce" />
                            <span className="text-[7px] font-bold mt-1 uppercase tracking-widest text-center">Ads<br/>Creative</span>
                        </div>
                    </div>

                    {/* Floating Badge: Team Web */}
                    <div className="absolute top-0 right-0 bg-white pl-1 pr-2 py-0.5 rounded-full shadow-md border border-slate-100 flex items-center gap-1.5 transform translate-x-2 group-hover:translate-x-0 transition-transform duration-500 z-40">
                        <div className="flex -space-x-1.5">
                             <div className="w-5 h-5 rounded-full bg-blue-100 border border-white flex items-center justify-center text-[6px] font-bold text-blue-700">AL</div>
                             <div className="w-5 h-5 rounded-full bg-indigo-100 border border-white flex items-center justify-center text-[6px] font-bold text-indigo-700">WI</div>
                        </div>
                        <span className="text-[7px] font-bold text-slate-800">Web Team</span>
                    </div>
                </div>
             </div>

             {/* Text Part */}
             <div className="p-6 md:p-8 flex flex-col flex-grow bg-white">
                <span className="text-indigo-600 font-bold text-[10px] uppercase tracking-widest mb-3">STRATÉGIE & PRODUCTION</span>
                <h3 className="text-xl md:text-2xl font-display font-bold text-slate-900 mb-3 leading-tight uppercase">
                    Stratégie d’attention & Production orientée <span className="text-indigo-600">algorithme</span>.
                </h3>
                <p className="text-slate-600 text-xs md:text-sm leading-relaxed mb-6 flex-grow">
                   Notre studio intègre talents dédiés. Alexandre et Wilfried pilotent le pôle Webdesign, tandis que nos Designers & Experts IA produisent en masse.
                </p>
                <div>
                    <Button variant="primary" className="w-full md:w-auto shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 h-9 text-[11px] px-6">
                        Achetez maintenant
                    </Button>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};