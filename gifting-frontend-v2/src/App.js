import React from "react";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";
import "./App.css";

function App() {
  return (
    <div>
      <Navbar />
      <header className="header">
        <h1>Gifticon</h1>
        <p>Send gifts that matter, instantly.</p>
      </header>
      <ProductGrid />
    </div>
  );
}

export default App;