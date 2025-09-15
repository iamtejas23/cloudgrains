import React from "react";
import "./App.css";
import logo from "../src/img/logo.png"; // Ensure you have a logo image in the specified path

function App() {
  return (
    <div className="container">
      {/* Logo */}
      <header className="header">
        <img src={logo} alt="CloudGrains Logo" className="logo" />
        <h1>
          Cloud<span className="highlight">Grains</span>
        </h1>
      </header>

      {/* Tagline */}
      <p className="tagline">
        Scalable Cloud & DevOps Services from Scratch 🚀
      </p>

      {/* Coming Soon */}
      <div className="coming-soon">Coming Soon</div>

      {/* Email subscription
      <div className="subscribe">
        <input type="email" placeholder="Enter your email" />
        <button>Notify Me</button>
      </div> */}

      {/* Footer */}
      <footer>
        © {new Date().getFullYear()} CloudGrains. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
