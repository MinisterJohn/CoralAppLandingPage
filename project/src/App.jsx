import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import { motion } from 'framer-motion';

function App() {
  return (
    <div className="App">
      <div className="fixed inset-0 bg-background z-[-1]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/20 via-background to-background"></div>
      </div>
      
      <Navbar />
      
      <main>
        <Hero />
      </main>
    </div>
  );
}

export default App;