import React from "react";
// import { useState, useMemo } from 'react';
import "./styles/index.css";
import "./styles/App.css";
import Header from "./widgets/Header.tsx";
import HomePage from "./widgets/HomePage.tsx";

function App() {
  return (
    <div className="App">
      <Header transparent={true} />
      <HomePage />
    </div>
  );
}

export default App;
