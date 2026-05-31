import React from "react";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import ParticleBackground from "./components/ParticleBackground";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <ParticleBackground />
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
