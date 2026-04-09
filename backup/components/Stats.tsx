import React from 'react';
import { Button } from './Button';

export const Stats: React.FC = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 md:px-6">
         <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 max-w-2xl leading-tight">
               Les chiffres du <br/>
               <span className="text-slate-400">Succès.</span>
            </h2>
            <div className="text-right">
               <p className="text-slate-500 text-sm max-w-xs ml-auto mb-4">
                  Stratégie, créativité et croissance - le moteur de chaque idée audacieuse.
               </p>
               <Button className="bg-slate-100 text-slate-900 hover:bg-slate-200 border border-slate-200 text-xs px-4 h-10">
                  Voir nos résultats
               </Button>
            </div>
         </div>

         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Stat 1 */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-lg transition-all">
               <div className="text-7xl font-bold text-niventy-600 mb-4 tracking-tighter">
                  500<span className="text-4xl text-slate-900">+</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Clients Accompagnés</h3>
               <p className="text-slate-500 text-sm">
                  Des startups aux grands groupes, nous avons piloté la croissance de centaines de marques.
               </p>
            </div>

            {/* Stat 2 */}
            <div className="p-8 bg-slate-900 border border-slate-800 rounded-3xl text-white relative overflow-hidden group shadow-xl">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <div className="text-9xl font-bold">%</div>
               </div>
               <div className="text-7xl font-bold text-white mb-4 tracking-tighter">
                  98<span className="text-4xl">%</span>
               </div>
               <h3 className="text-xl font-bold text-white mb-2">Taux de Rétention</h3>
               <p className="text-slate-400 text-sm">
                  Notre engagement envers la qualité transparaît dans la fidélité de nos partenaires.
               </p>
            </div>

            {/* Stat 3 */}
            <div className="p-8 bg-slate-50 border border-slate-100 rounded-3xl hover:shadow-lg transition-all">
               <div className="text-7xl font-bold text-slate-900 mb-4 tracking-tighter">
                  30<span className="text-4xl text-niventy-600">M€</span>
               </div>
               <h3 className="text-xl font-bold text-slate-900 mb-2">Gérés en Ads</h3>
               <p className="text-slate-500 text-sm">
                  Investis rentablement sur Meta, Google et TikTok pour le compte de nos clients.
               </p>
            </div>
         </div>
      </div>
    </section>
  );
};