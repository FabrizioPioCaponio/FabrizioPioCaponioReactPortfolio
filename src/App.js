import React, { useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import NavBar from './components/NavBar';
import Home from './components/Home';
import SpacerVh from './components/utils/SpacerVh';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import SocialiLinks from './components/SocialiLinks';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simula un'operazione asincrona di caricamento dei dati
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {isLoading && <LoadingScreen />}
      
      <NavBar />
      <Home />
      <SpacerVh />
      
      <div className="bg3">
        <About />
        <Portfolio />
        <Skills />
        <Contact />
      </div>

      <SocialiLinks />
    </div>
  );
}

export default App;
