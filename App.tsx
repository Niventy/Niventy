import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';

import { ServicesList } from './components/ServicesList';
import { About } from './components/About';
import { Work } from './components/Work';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Method } from './components/Method';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-700 relative selection:bg-accent-500 selection:text-white bg-cream-100">

      <Header />

      <main className="relative z-10">
        <Hero />

        <About />
        <Work />
        <Testimonials />
        <Pricing />

        <Method />
        <Process />

      </main>
      <Footer />
    </div>
  );
}

export default App;

