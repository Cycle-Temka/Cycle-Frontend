import React from "react";
// import { useState, useMemo } from 'react';
import "./styles/index.css";
import "./styles/App.css";
import Header from "./widgets/Header.tsx";
import HomePage from "./widgets/HomePage.tsx";
import Main from "./widgets/Main.tsx";
import Footer from "./widgets/Footer.tsx";

function App() {
  return (
    <div className="App">
      <Header transparent={true} />
      <HomePage />
      <>text</>
      <Main />
      <>text</>
      <Footer />
    </div>
  );
}

export default App;
