import React from "react";
import "./ProductGrid.css";

const products = [
  { id: 1, name: "Starbucks Coffee", price: "$5", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Burger King Set", price: "$9", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Amazon Gift Card", price: "$25", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Movie Ticket", price: "$12", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Baskin Robbins", price: "$6", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Luxury Tea Set", price: "$18", image: "https://via.placeholder.com/150" },
];

function ProductGrid() {
  return (
    <div className="grid">
      {products.map((product) => (
        <div key={product.id} className="card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>{product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
}

export default ProductGrid;