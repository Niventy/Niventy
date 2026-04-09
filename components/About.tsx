import React from 'react';
import { Target, Palette, Eye, Code2, BarChart3, Brain, Shield } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <>
    {/* About intro — white bg */}
    <section className="pt-20 pb-10 px-4 md:px-6">
      <div className="max-w-[1200px] mx-auto text-center">
        <p className="font-accent italic text-slate-400 text-lg md:text-xl mb-6">About Us</p>
        <h2 className="text-4xl md:text-6xl lg:text-[80px] font-display font-bold text-slate-900 tracking-display leading-[0.95] mb-8">
          Nous rendons les marques<br/>
          <span className="font-accent italic normal-case text-accent-500 font-normal">impossibles à ignorer.</span><span className="text-accent-500">®</span>
        </h2>

        <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-2xl mx-auto mb-16">
          Niventy est une agence de performance digitale née de la conviction qu'une marque mérite mieux qu'un simple prestataire. Nous combinons <span className="text-slate-900 font-medium">Media Buying</span>, <span className="text-slate-900 font-medium">Webdesign</span> et <span className="text-slate-900 font-medium">production créative IA</span> pour construire des systèmes d'acquisition complets — pas juste des campagnes, mais des architectures de croissance durables qui génèrent de la rentabilité mois après mois.
        </p>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-8 md:gap-16">
          <div>
            <div className="text-5xl md:text-7xl font-display font-bold text-slate-900 tracking-tighter leading-none">70+</div>
            <p className="text-slate-400 text-sm mt-2">Clients actifs</p>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-display font-bold text-accent-500 tracking-tighter leading-none">98%</div>
            <p className="text-slate-400 text-sm mt-2">Rétention client</p>
          </div>
          <div>
            <div className="text-5xl md:text-7xl font-display font-bold text-indigo-600 tracking-tighter leading-none">$2M+</div>
            <p className="text-slate-400 text-sm mt-2">Revenus générés/an</p>
          </div>
        </div>
      </div>
    </section>

    {/* Colored bento — overlapping style */}
    <section id="about" className="py-16">
      <div className="max-w-[1200px] mx-auto w-full px-4 md:px-6">

        {/* Row 1 — 2 large cards, overlapping */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Card 1 — Yellow — Notre Mission */}
          <div className="bg-amber-400 rounded-2xl p-8 md:p-10 min-h-[240px] flex flex-col justify-between transform md:-rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg relative z-20">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Target size={22} className="text-amber-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-slate-900 mb-2">Construire des systèmes de croissance durables.</h3>
              <p className="text-slate-800/60 text-sm">Pas juste des campagnes. Des architectures d'acquisition complètes qui génèrent de la rentabilité mois après mois.</p>
            </div>
          </div>

          {/* Card 2 — Indigo — Notre Studio */}
          <div className="bg-indigo-600 rounded-2xl p-8 md:p-10 min-h-[240px] flex flex-col justify-between transform md:rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg relative z-10">
            <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Palette size={22} className="text-indigo-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2">Une équipe à taille humaine.</h3>
              <p className="text-indigo-200 text-sm">Pas de juniors, pas de stagiaires. Des experts senior en media buying, webdesign et production créative IA.</p>
            </div>
          </div>
        </div>

        {/* Row 2 — 3 cards, overlapping offset */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:-mt-2">
          {/* Card 3 — Pink — Tracking */}
          <div className="bg-accent-500 rounded-2xl p-7 md:p-8 min-h-[200px] flex flex-col justify-between transform md:rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <BarChart3 size={20} className="text-accent-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1">Data-Driven</h3>
              <p className="text-pink-100 text-sm">Chaque décision guidée par la data. Tracking avancé, attribution précise, optimisation continue.</p>
            </div>
          </div>

          {/* Card 4 — Emerald — Créatif */}
          <div className="bg-emerald-500 rounded-2xl p-7 md:p-8 min-h-[200px] flex flex-col justify-between transform md:-rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Brain size={20} className="text-emerald-600" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1">Créatif x IA</h3>
              <p className="text-emerald-100 text-sm">L'alliance de la créativité humaine et de l'IA pour produire des assets à grande échelle.</p>
            </div>
          </div>

          {/* Card 5 — Dark — Transparence */}
          <div className="bg-dark-900 rounded-2xl p-7 md:p-8 min-h-[200px] flex flex-col justify-between transform md:rotate-1 hover:rotate-0 transition-transform duration-300 shadow-lg">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center shadow-sm">
              <Shield size={20} className="text-slate-700" />
            </div>
            <div>
              <h3 className="font-display font-bold text-lg text-white mb-1">Transparence Totale</h3>
              <p className="text-white/50 text-sm">Accès complet à votre Business Manager. Reporting hebdo. Zéro boîte noire.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
};









