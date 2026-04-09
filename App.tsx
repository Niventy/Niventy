import React from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { PhotoMarquee } from './components/PhotoMarquee';

import { ServicesList } from './components/ServicesList';
import { About } from './components/About';
import { Work } from './components/Work';
import { Pricing } from './components/Pricing';
import { Process } from './components/Process';
import { Footer } from './components/Footer';
import { Testimonials } from './components/Testimonials';

function App() {
  return (
    <div className="min-h-screen font-sans text-slate-700 relative selection:bg-accent-500 selection:text-white bg-white">

      <Header />

      <main className="relative z-10">
        <Hero />
        <PhotoMarquee />

        <About />
        <Work />
        <Testimonials />
        <Pricing />

        <ServicesList />
        <Process />

      </main>
      <Footer />
    </div>
  );
}

export default App;

