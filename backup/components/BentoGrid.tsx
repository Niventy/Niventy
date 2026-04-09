import React from 'react';
import { Button } from './Button';
import { 
  Target, 
  Monitor, 
  ShoppingBag,
  ArrowRight,
  Brain,
  MousePointerClick,
  Smartphone,
  Layers,
  Zap
} from 'lucide-react';

export const BentoGrid: React.FC = () => {
  return (
    <section id="services" className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-24 text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Nos Systèmes de <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Croissance</span>
            </h2>
            <p className="text-xl text-slate-600 font-medium">
               Ne louez pas des services. Installez des moteurs de performance.
            </p>
        </div>

        {/* Systems Grid */}
        <div className="flex flex-col gap-8">
          
          {/* System 1: Growth Engine */}
          <div className="w-full rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden group hover:shadow-2xl hover:shadow-blue-900/5 transition-all duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                {/* Left: Content */}
                <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <MousePointerClick size={14} /> System 01
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Growth Engine</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                        Une infrastructure d'acquisition complète. Nous pilotons vos campagnes Meta & Google Ads avec une approche scientifique pour maximiser le ROAS.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-blue-600 group-hover/item:border-blue-100 transition-colors shrink-0">
                                <Target size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Acquisition</h4>
                                <p className="text-sm text-slate-500">Ciblage précis et tests d'audiences continus.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-blue-600 group-hover/item:border-blue-100 transition-colors shrink-0">
                                <Zap size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Scaling</h4>
                                <p className="text-sm text-slate-500">Augmentation des budgets tout en maintenant la rentabilité.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-blue-600 group-hover/item:border-blue-100 transition-colors shrink-0">
                                <Layers size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Retargeting</h4>
                                <p className="text-sm text-slate-500">Systèmes de ré-engagement omnicanal.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right: Visual (Dashboard Mockup) */}
                <div className="lg:col-span-7 bg-slate-50/50 border-l border-slate-100 relative overflow-hidden flex items-center justify-center p-8 md:p-12">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                    
                    {/* Dashboard Card */}
                    <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl border border-slate-200/60 p-6 relative z-10 transform group-hover:scale-[1.02] transition-transform duration-500">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-8">
                            <div>
                                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Performance Globale</div>
                                <div className="text-2xl font-bold text-slate-900 flex items-baseline gap-2">
                                    4.8x <span className="text-sm font-medium text-green-500 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
                                </div>
                            </div>
                            <div className="flex gap-2">
                                <div className="px-3 py-1 rounded-md bg-slate-50 border border-slate-100 text-xs font-medium text-slate-600">30J</div>
                                <div className="px-3 py-1 rounded-md bg-white border border-slate-100 text-xs font-medium text-slate-400">90J</div>
                            </div>
                        </div>

                        {/* Chart Area */}
                        <div className="h-48 w-full relative">
                             {/* Grid Lines */}
                             <div className="absolute inset-0 flex flex-col justify-between">
                                 <div className="w-full h-px bg-slate-100"></div>
                                 <div className="w-full h-px bg-slate-100"></div>
                                 <div className="w-full h-px bg-slate-100"></div>
                                 <div className="w-full h-px bg-slate-100"></div>
                             </div>
                             
                             {/* Chart Path */}
                             <svg className="absolute inset-0 w-full h-full overflow-visible" preserveAspectRatio="none">
                                 <defs>
                                     <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                                         <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2"/>
                                         <stop offset="100%" stopColor="#3B82F6" stopOpacity="0"/>
                                     </linearGradient>
                                 </defs>
                                 <path d="M0,150 C50,140 100,100 150,110 C200,120 250,60 300,50 C350,40 400,80 450,20 L450,192 L0,192 Z" fill="url(#chartGradient)" />
                                 <path d="M0,150 C50,140 100,100 150,110 C200,120 250,60 300,50 C350,40 400,80 450,20" fill="none" stroke="#3B82F6" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                 
                                 {/* Data Points */}
                                 <circle cx="150" cy="110" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />
                                 <circle cx="300" cy="50" r="4" fill="white" stroke="#3B82F6" strokeWidth="2" />
                                 <circle cx="450" cy="20" r="6" fill="#3B82F6" stroke="white" strokeWidth="2" className="animate-pulse" />
                             </svg>
                        </div>
                        
                        {/* Metrics Row */}
                        <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-100">
                            <div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase">Dépensé</div>
                                <div className="text-sm font-bold text-slate-700">12,450€</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase">Revenus</div>
                                <div className="text-sm font-bold text-slate-700">59,760€</div>
                            </div>
                            <div>
                                <div className="text-[10px] text-slate-400 font-bold uppercase">CPA</div>
                                <div className="text-sm font-bold text-slate-700">14.20€</div>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* System 2: Digital Product Studio */}
          <div className="w-full rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden group hover:shadow-2xl hover:shadow-purple-900/5 transition-all duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                {/* Right: Visual (Browser Mockup) - Swapped for variety */}
                <div className="lg:col-span-7 bg-slate-50/50 border-r border-slate-100 relative overflow-hidden flex items-center justify-center p-8 md:p-12 order-2 lg:order-1">
                    <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
                    
                    {/* Browser Window */}
                    <div className="w-full max-w-lg bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                        <div className="h-8 bg-slate-50 border-b border-slate-100 flex items-center px-4 gap-2">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="h-5 w-32 bg-slate-100 rounded-md"></div>
                            </div>
                        </div>
                        <div className="p-6 space-y-6 bg-white">
                            {/* Fake UI Content */}
                            <div className="flex justify-between items-center">
                                <div className="h-8 w-24 bg-slate-100 rounded-lg"></div>
                                <div className="flex gap-2">
                                    <div className="h-8 w-8 bg-slate-100 rounded-full"></div>
                                    <div className="h-8 w-20 bg-slate-900 rounded-full"></div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="h-32 bg-slate-50 rounded-xl border border-slate-100"></div>
                                <div className="h-32 bg-slate-50 rounded-xl border border-slate-100"></div>
                            </div>
                            <div className="h-24 bg-slate-50 rounded-xl border border-slate-100 flex items-center justify-center">
                                <div className="h-2 w-1/2 bg-slate-200 rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Left: Content */}
                <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center relative z-10 order-1 lg:order-2">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 border border-purple-100 text-purple-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <Monitor size={14} /> System 02
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Digital Product Studio</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                        Nous ne faisons pas juste des sites web. Nous construisons des produits digitaux performants conçus pour convertir et scaler.
                    </p>
                    
                    <div className="space-y-6">
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-purple-600 group-hover/item:border-purple-100 transition-colors shrink-0">
                                <Layers size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Sites Vitrines & Landings</h4>
                                <p className="text-sm text-slate-500">Design premium et optimisation conversion.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-purple-600 group-hover/item:border-purple-100 transition-colors shrink-0">
                                <ShoppingBag size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">E-commerce</h4>
                                <p className="text-sm text-slate-500">Boutiques Shopify & Woocommerce performantes.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4 group/item">
                            <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-400 group-hover/item:text-purple-600 group-hover/item:border-purple-100 transition-colors shrink-0">
                                <Smartphone size={20} />
                            </div>
                            <div>
                                <h4 className="font-bold text-slate-900 text-sm mb-1">Web Apps & SaaS</h4>
                                <p className="text-sm text-slate-500">Applications complexes et dashboards sur-mesure.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
          </div>

          {/* System 3: Creative Engine */}
          <div className="w-full rounded-[2.5rem] bg-white border border-slate-200 shadow-xl shadow-slate-200/50 overflow-hidden group hover:shadow-2xl hover:shadow-pink-900/5 transition-all duration-500">
             <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[500px]">
                {/* Left: Content */}
                <div className="lg:col-span-5 p-10 md:p-14 flex flex-col justify-center relative z-10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-xs font-bold uppercase tracking-wider mb-6 w-fit">
                        <Brain size={14} /> System 03
                    </div>
                    <h3 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">Creative Engine</h3>
                    <p className="text-slate-600 text-lg leading-relaxed mb-10">
                        L'alliance de la créativité humaine et de l'IA pour produire des assets publicitaires à grande échelle et dominer l'algorithme.
                    </p>
                    
                    <div className="grid grid-cols-2 gap-6 mb-10">
                       <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-2xl font-bold text-slate-900 mb-1">-60%</div>
                            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Coûts Prod.</div>
                       </div>
                       <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                            <div className="text-2xl font-bold text-slate-900 mb-1">x10</div>
                            <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">Volume Tests</div>
                       </div>
                    </div>

                    <div>
                        <Button variant="primary" className="px-8 py-4 h-auto text-base shadow-lg shadow-slate-900/20 hover:shadow-slate-900/40" withIcon>
                           Voir la Creative Factory
                        </Button>
                    </div>
                </div>

                {/* Right: Visual (Generation UI) */}
                <div className="lg:col-span-7 bg-slate-50/50 border-l border-slate-100 relative overflow-hidden flex items-center justify-center p-8 md:p-12">
                     <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(236,72,153,0.03)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                     
                     {/* Generation Card */}
                     <div className="w-full max-w-lg relative">
                        {/* Main Card */}
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-6 relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30">
                                    <Brain size={20} />
                                </div>
                                <div>
                                    <div className="text-sm font-bold text-slate-900">AI Generator</div>
                                    <div className="text-xs text-slate-400">Processing request...</div>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                    <div className="h-full bg-gradient-to-r from-pink-500 to-purple-600 w-3/4 animate-[shimmer_2s_infinite]"></div>
                                </div>
                                <div className="grid grid-cols-3 gap-3">
                                    <div className="aspect-square rounded-lg bg-slate-100 animate-pulse"></div>
                                    <div className="aspect-square rounded-lg bg-slate-100 animate-pulse delay-100"></div>
                                    <div className="aspect-square rounded-lg bg-slate-100 animate-pulse delay-200"></div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 bg-white px-4 py-2 rounded-lg shadow-lg border border-slate-100 text-xs font-bold text-slate-600 animate-bounce delay-700 z-20">
                            Generating...
                        </div>
                     </div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};