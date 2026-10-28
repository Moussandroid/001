import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import InfoPerso from "./InfoPerso";
import Experience from "./Experience";
import Competence from "./Competence";

function App() {
  return (
    <div>
      <h1>Mon CV en ligne</h1>
      <InfoPerso />
      <Experience />
      <Competence />
    </div>
  );
}

export default App
