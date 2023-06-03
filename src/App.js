import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Analytics from "./components/Analytics";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Analytics />
      <Newsletter />
    </div>
  );
}

export default App;
