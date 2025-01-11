import React, { useState } from 'react';
import Nav from './Components/Nav';
import Home from './Components/Home';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Menu from './Components/Menu';
import videoBackground from './assets/background.mp4';
import Footer from './Components/Footer';
import './index.css'; 


const App = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const sectionStyle = {
    position: 'relative',
    overflow: 'hidden',
  };

  const videoStyle = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: -1,
  };

  return (
    <div className="font-montserrat">
      <Nav menuOpen={menuOpen} toggleMenu={toggleMenu} />

      <main className={`mt-[64px] relative ${menuOpen && 'opacity-80'}`} style={sectionStyle}>
        <video autoPlay loop muted playsInline style={videoStyle}>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer/>
      </main>

      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen} toggleMenu={toggleMenu} />
    </div>
  );
};

export default App;
