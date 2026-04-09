import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'RÉALISATIONS', href: '#work' },
    { label: 'EXPERTISE', href: '#services' },
    { label: 'MÉTHODE', href: '#process' },
    { label: 'OFFRE', href: '#pricing' },
    { label: 'CONTACT', href: '#contact' },
  ];

  return (
    <>
      {/* Clean Transparent Header — Bizu-style */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-dark-950/80 backdrop-blur-md border-b border-white/5'
          : 'bg-transparent'
      }`}>
        <div className="max-w-[1400px] mx-auto w-full px-6 md:px-10 py-5 flex items-center justify-between">

          {/* Logo */}
          <a href="#" className="flex-shrink-0 hover:opacity-80 transition-opacity">
            <Logo className="h-5 w-auto" theme="dark" />
          </a>

          {/* Desktop Nav — Right aligned, uppercase, wide spacing */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[13px] font-medium text-white hover:text-white/70 transition-colors tracking-widest uppercase"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-dark-950 z-40 flex flex-col items-center justify-center transition-all duration-500 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="flex flex-col items-center gap-8 p-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-3xl font-display font-medium text-white hover:text-accent-400 transition-colors tracking-widest uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
