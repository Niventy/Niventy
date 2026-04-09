import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { Button } from './Button';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Links
  const navLinks = [
    { label: 'RÉALISATIONS', href: '#work' },
    { label: 'EXPERTISE', href: '#services' },
    { label: 'MÉTHODE', href: '#process' },
    { label: 'OFFRE', href: '#pricing' },
  ];

  return (
    <>
      {/* Floating Island Header - Dark Glass Version */}
      <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div className="pointer-events-auto w-full max-w-5xl bg-slate-950/60 backdrop-blur-md border border-white/10 rounded-full pl-6 pr-2 py-2 shadow-2xl shadow-black/20 flex items-center justify-between transition-all duration-300 hover:bg-slate-950/80 hover:border-white/20 hover:shadow-white/5">
          
          {/* Logo Area - Inverted for Dark Header - Reduced size h-3.5 */}
          <a href="#" className="flex-shrink-0 relative top-[1px] opacity-90 hover:opacity-100 transition-opacity">
            <Logo className="h-3.5 w-auto" theme="dark" />
          </a>

          {/* Desktop Nav - Centered */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-full hover:bg-white/10"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-3">
             <div className="hidden md:block">
                <Button 
                  variant="primary"
                  className="rounded-full px-6 py-2.5 text-sm font-bold h-auto active:scale-95 uppercase tracking-wider"
                >
                  DISCUTER DU PROJET
                </Button>
             </div>

             {/* Mobile Menu Toggle */}
             <button 
                className="md:hidden p-2 text-slate-300 bg-white/10 rounded-full hover:bg-white/20 transition-colors backdrop-blur-sm border border-white/5"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
             >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
             </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-4">
          {navLinks.map((link) => (
            <a 
              key={link.label} 
              href={link.href}
              className="text-4xl font-display font-bold text-white hover:text-niventy-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <Button className="mt-8 bg-white text-slate-950 rounded-full px-8 py-4 text-lg font-bold" onClick={() => setIsMobileMenuOpen(false)}>
            Discuter du projet
          </Button>
        </div>
      </div>
    </>
  );
};