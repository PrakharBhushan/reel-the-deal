/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import Services from './components/Services';
import Equipment from './components/Equipment';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <Equipment />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
