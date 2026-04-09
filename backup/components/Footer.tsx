import React from 'react';
import { Logo } from './Logo';
import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Logo dark className="h-8" />
            <p className="text-slate-400 leading-relaxed">
              Niventy est une agence de performance digitale. Nous aidons les marques ambitieuses à scaler grâce à l'alliance parfaite entre Media Buying et Webdesign.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-niventy-600 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-niventy-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-niventy-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Expertise</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">Facebook & Instagram Ads</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Google Ads (SEA)</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Création de Site Web</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Tracking & Analytics</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Création de Contenu (UGC)</a></li>
            </ul>
          </div>

          {/* Agency Column */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Agence</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-white transition-colors">À propos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Nos Réalisations</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Carrières</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Newsletter / Contact */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact</h4>
            <ul className="space-y-4 mb-6">
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <a href="mailto:hello@niventy.com" className="hover:text-white transition-colors">hello@niventy.com</a>
              </li>
            </ul>
            <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
               <p className="text-sm text-white font-medium mb-2">Prêt à scaler ?</p>
               <button className="w-full py-2 bg-niventy-600 hover:bg-niventy-700 text-white rounded-lg text-sm font-semibold transition-colors">
                  Réserver un appel
               </button>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Niventy. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Mentions Légales</a>
            <a href="#" className="hover:text-white transition-colors">Politique de Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
};