import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navigation from './components/navigation/Navigation';
import Header from './components/header/Header';
import Projects from './components/projects';
import Bio from './components/bio/Bio';
import Contact from './components/contact/Contact';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
    <>
      <Toaster />
      <Navigation />
      <Header />
      <Bio />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
