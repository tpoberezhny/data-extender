import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";
import Plans from "./components/Plans";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
