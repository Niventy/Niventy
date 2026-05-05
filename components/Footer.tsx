import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-cream-100 text-slate-700 pt-20 pb-0">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <div style={{ filter: 'brightness(0)' }}>
              <Logo className="h-8" theme="light" />
            </div>
            <p className="text-slate-500 leading-relaxed">
              Niventy est une agence de performance digitale. Nous aidons les marques ambitieuses à scaler grâce à l'alliance parfaite entre Media Buying et Webdesign.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-niventy-500 hover:text-white transition-colors">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-niventy-500 hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-niventy-500 hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
            </div>
          </div>

          {/* Agency Column */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Agence</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">À propos</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Nos Réalisations</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Carrières</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Blog</a></li>
              <li><a href="#" className="text-slate-500 hover:text-slate-900 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-slate-900 font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2 text-slate-500">
                <Mail size={16} />
                <a href="mailto:alexandre.gobert@niventy.com" className="hover:text-slate-900 transition-colors">alexandre.gobert@niventy.com</a>
              </li>
            </ul>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
               <p className="text-sm text-slate-900 font-medium mb-2">Prêt à scaler ?</p>
               <button className="w-full py-2 bg-niventy-500 hover:bg-niventy-600 text-white rounded-lg text-sm font-semibold transition-colors">
                  Réserver un appel
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Niventy. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-slate-900 transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Politique de Confidentialité</a>
          </div>
        </div>

      </div>

      {/* Giant gradient NIVENTY at the very bottom */}
      <div className="w-full overflow-hidden leading-none -mb-2">
        <p
          className="text-center font-display font-black tracking-display select-none bg-clip-text text-transparent"
          style={{
            fontSize: 'clamp(80px, 22vw, 340px)',
            backgroundImage: 'linear-gradient(180deg, #ec4899 0%, #f472b6 35%, #f9a8d4 65%, #ffffff 100%)',
            lineHeight: '0.85',
            letterSpacing: '-0.04em',
          }}
        >
          NIVENTY
        </p>
      </div>

    </footer>
  );
};
