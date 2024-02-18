import React from 'react';
// import { useState, useMemo } from 'react';
import './styles/App.css';
import Header from './widgets/Header.tsx';
import Footer from './widgets/Footer.tsx';


function App() {
  return (
    <div className = "App">
      <Header/>

      <main>
        <img id = "main-bg-image"/>
        <h3>Главная чать сайта</h3>
      </main>

      <Footer/>
    </div>
  );
}

export default App;
