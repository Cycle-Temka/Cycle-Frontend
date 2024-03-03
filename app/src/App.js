import React from "react";
// import { useState, useMemo } from 'react';
import "./styles/App.css";
import Header from "./widgets/Header.jsx";
import HomePage from "./widgets/HomePage.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <HomePage />
    </div>
  );
}

export default App;
