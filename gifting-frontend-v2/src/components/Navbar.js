import React from "react";
import { signInWithPopup } from "firebase/auth";
import { auth, provider } from "../firebase-config";
import "./Navbar.css";

function Navbar() {
  const login = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      alert(`Welcome, ${result.user.displayName}`);
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">Gifticon</div>
      <ul className="nav-links">
        <li>Categories</li>
        <li>Cart</li>
        <li><button onClick={login} className="login-btn">Login</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;