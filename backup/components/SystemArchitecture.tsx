import React from 'react';
import { 
  MessageCircle,
  PenTool,
  Search,
  Cpu,
  ArrowRight,
  Target,
  User,
  TrendingDown,
  Settings,
  Sliders,
  Users,
  Sparkles,
  Filter,
  ShoppingBag,
  MoveVertical,
  Heart,
  MessageSquare,
  BarChart3,
  Scan,
  ShoppingCart,
  MousePointer2,
  CreditCard,
  Bell,
  CheckCircle2,
  Star,
  Zap,
  Smartphone,
  Layout,
  Code2,
  Calendar,
  TrendingUp,
  Image as ImageIcon,
  Clock,
  CalendarCheck,
  Instagram
} from 'lucide-react';

export const SystemArchitecture: React.FC = () => {
  return (
    <section className="py-20 min-h-[500px] bg-[#F8FAFC] relative overflow-hidden text-slate-900 flex items-center justify-center">
      
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6 relative z-10">
        <div className="mb-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-3">
            <Cpu size={12} /> NOS SERVICES
          </div>
          <h2 className="text-2xl md:text-3xl font-display font-bold mb-3 leading-tight text-slate-900 uppercase">
            <span className="blur-[1px] hover:blur-none transition-all duration-500">UNE ARCHITECTURE DE</span> <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 blur-[1px] hover:blur-none transition-all duration-500">CROISSANCE COMPLÈTE.</span>
          </h2>
          <p className="text-slate-500 text-sm max-w-2xl leading-relaxed">
            Nous ne sommes pas juste une agence de pubs. Nous construisons l'écosystème complet nécessaire pour scaler votre marque.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          
          {/* --- ROW 1 --- */}

          {/* 1. Media Buying Engine */}
          <div className="lg:col-span-7 min-h-[240px] rounded-[1.25rem] bg-white border border-slate-100 p-4 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-slate-200/40">
              
              {/* Visual Area: PACTO 3D Wireframe Engine */}
              <div className="flex-1 flex items-center justify-center relative perspective-[2000px] py-4">
                  
                  {/* Side Indicator */}
                  <div className="absolute left-1/2 ml-24 top-1/2 -translate-y-1/2 h-32 w-10 opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none">
                      <svg width="100%" height="100%" viewBox="0 0 60 300" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M10 20 Q 50 150 10 280" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4" />
                      </svg>
                  </div>

                  <div 
                    className="relative w-32 h-32 transition-transform duration-700 group-hover:rotate-x-[50deg] group-hover:rotate-z-[-40deg]"
                    style={{ 
                        transformStyle: 'preserve-3d',
                        transform: 'rotateX(55deg) rotateZ(-45deg)'
                    }}
                  >
                      {/* Layers scaled down */}
                      <div className="absolute left-1/2 top-1/2 w-full h-full rounded-xl border border-blue-500/20 bg-blue-50/50 shadow-sm flex items-center justify-center transition-all duration-700 [--z-offset:-30px] group-hover:[--z-offset:-40px]" style={{ transform: 'translate3d(-50%, -50%, var(--z-offset))' }}>
                           <ShoppingBag className="text-blue-400" size={20} />
                      </div>
                      <div className="absolute left-1/2 top-1/2 w-[85%] h-[85%] rounded-lg border border-blue-400/20 bg-white shadow-sm flex items-center justify-center transition-all duration-700 [--z-offset:0px]" style={{ transform: 'translate3d(-50%, -50%, var(--z-offset))' }}>
                           <Filter className="text-blue-300" size={18} />
                      </div>
                      <div className="absolute left-1/2 top-1/2 w-[70%] h-[70%] rounded-md border border-blue-300/30 bg-blue-500 flex items-center justify-center transition-all duration-700 [--z-offset:30px] group-hover:[--z-offset:40px]" style={{ transform: 'translate3d(-50%, -50%, var(--z-offset))' }}>
                           <Sparkles className="text-white" size={16} />
                      </div>
                  </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                  <div className="text-blue-600 font-bold mb-1 tracking-wider uppercase text-[10px]">PILOTAGE & CONTRIBUTION</div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 leading-tight">Croissance <span className="text-blue-600">structurée.</span></h3>
                  <p className="text-slate-500 text-xs leading-relaxed max-w-md">
                    Nous structurons votre acquisition pour qu’elle contribue réellement à votre développement global. Tracking maîtrisé, rentabilité assurée.
                  </p>
              </div>
          </div>

          {/* 2. Creative Studio */}
          <div className="lg:col-span-5 min-h-[240px] rounded-[1.25rem] bg-white border border-slate-100 p-4 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-slate-200/40">
              
              {/* Visual Area */}
              <div className="flex-1 flex items-center justify-center relative py-2">
                  <div className="relative w-[200px] h-[160px] bg-slate-50 rounded-xl border border-slate-100 overflow-hidden shadow-inner">
                      {/* Mock UI */}
                      <div className="h-4 border-b border-slate-200 bg-white flex items-center px-2 gap-1">
                          <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                          <div className="w-1 h-1 rounded-full bg-slate-200"></div>
                      </div>
                      <div className="p-3 flex gap-3">
                          <div className="w-1/2 space-y-2">
                              <div className="h-2 w-full bg-slate-200 rounded"></div>
                              <div className="h-2 w-2/3 bg-slate-100 rounded"></div>
                              <div className="grid grid-cols-2 gap-1">
                                  <div className="h-8 bg-white border border-slate-200 rounded"></div>
                                  <div className="h-8 bg-white border border-slate-200 rounded"></div>
                              </div>
                          </div>
                          <div className="w-1/2 h-24 bg-blue-600 rounded-lg shadow-lg transform rotate-6 translate-x-2 flex flex-col items-center justify-center p-2 text-white">
                              <Zap size={16} className="mb-1" />
                              <div className="text-[6px] font-bold uppercase tracking-tighter text-center">STATIQUE & VIDÉO</div>
                              <div className="mt-2 w-full h-3 bg-white/20 rounded flex items-center justify-center text-[5px]">CTA: Shop Now</div>
                          </div>
                      </div>
                  </div>
              </div>

              {/* Content Area */}
              <div className="relative z-10">
                  <div className="text-blue-600 font-bold mb-1 tracking-wider uppercase text-[10px]">STRATÉGIE & PRODUCTION</div>
                  <h3 className="text-lg font-bold mb-1 text-slate-900 leading-tight">Stratégie d’attention & Production orientée <span className="text-blue-600">algorithme.</span></h3>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    Notre studio intègre des talents dédiés pour piloter le pôle créatif et maximiser l'impact de vos campagnes.
                  </p>
              </div>
          </div>

          {/* --- ROW 2 --- */}

          {/* 3. Web Design */}
          <div className="lg:col-span-6 min-h-[160px] rounded-[1.25rem] bg-white border border-slate-100 p-4 relative overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-between shadow-xl shadow-slate-200/40">
               
               {/* Visual Area scaled down */}
               <div className="flex-1 flex items-center justify-center relative mb-2">
                   <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse:60%_60%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                   <div className="relative w-full max-w-[200px] h-[120px] flex items-center justify-center">
                       <div className="relative z-10 w-28 h-[120px] bg-white rounded-lg border border-slate-200 shadow-lg flex flex-col overflow-hidden">
                           <div className="h-3 border-b border-slate-100 bg-slate-50/50 flex items-center px-1">
                               <div className="w-0.5 h-0.5 rounded-full bg-slate-300"></div>
                           </div>
                           <div className="p-1.5 space-y-1">
                               <div className="w-full aspect-video bg-slate-50 rounded border border-slate-100"></div>
                               <div className="h-1 w-2/3 bg-slate-100 rounded-full"></div>
                               <div className="h-1 w-1/2 bg-slate-50 rounded-full"></div>
                           </div>
                       </div>
                   </div>
               </div>

               <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1 uppercase">WEB DESIGN & CONVERSION</h3>
                  <p className="text-slate-500 text-[10px] leading-relaxed">
                    Sites <strong>Shopify & Landing Pages</strong> optimisés pour la vente.
                  </p>
               </div>
          </div>

          {/* 4. Community Management */}
          <div className="lg:col-span-3 min-h-[160px] rounded-[1.25rem] bg-white border border-slate-100 p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col shadow-xl shadow-slate-200/40">
               <div className="flex-1 flex items-center justify-center py-2 relative">
                   <div className="relative w-40 flex flex-col gap-1.5">
                       <div className="flex items-center gap-2 p-1.5 bg-white rounded-lg border border-slate-100 shadow-sm opacity-60">
                           <CheckCircle2 size={8} className="text-blue-500" />
                           <div className="h-0.5 w-10 bg-slate-100 rounded-full"></div>
                       </div>
                       <div className="relative p-2 bg-white rounded-lg border border-blue-100 shadow-md z-10">
                           <div className="flex justify-between items-center mb-1">
                               <Instagram size={8} className="text-pink-500" />
                               <span className="text-[6px] font-bold text-blue-600">14:00</span>
                           </div>
                           <div className="h-0.5 w-full bg-slate-50 rounded-full"></div>
                       </div>
                   </div>
               </div>

               <div>
                   <h3 className="text-base font-bold mb-0.5 text-slate-900 uppercase">COMMUNITY MANAGEMENT</h3>
                   <p className="text-slate-500 text-[10px] leading-relaxed">
                      Gestion de calendrier & stratégie d'engagement.
                   </p>
               </div>
          </div>

          {/* 5. Audit */}
          <div className="lg:col-span-3 min-h-[160px] rounded-[1.25rem] bg-white border border-slate-100 p-4 relative overflow-hidden group hover:shadow-xl transition-all duration-500 flex flex-col shadow-xl shadow-slate-200/40">
               <div className="flex-1 flex items-center justify-center py-2 relative">
                   <div className="relative w-24 h-24 flex items-center justify-center">
                       <div className="absolute inset-0 border border-slate-100 rounded-full"></div>
                       <div className="absolute inset-0 rounded-full bg-[conic-gradient(from_0deg,transparent_0deg,rgba(239,68,68,0.05)_60deg,rgba(239,68,68,0.2)_90deg,transparent_90.1deg)] animate-[spin_3s_linear_infinite]"></div>
                       <Scan size={12} className="text-red-500 relative z-10" />
                   </div>
               </div>
               <div>
                   <h3 className="text-base font-bold mb-0.5 text-slate-900 uppercase">AUDIT & CONSULTING</h3>
                   <p className="text-slate-500 text-[10px] leading-relaxed">
                      Détection des failles et opportunités.
                   </p>
               </div>
          </div>

        </div>
      </div>
    </section>
  );
};
