import React from "react";
import { Footer, Header, Skills, Work } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <Skills />
      <Work />
      <Footer />
    </div>
  );
};

export default App;
