
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import React from 'react';
import Header from './components/data/Header';
import Hero from './components/data/Hero';
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
     
    </>
  );
}



export default App
