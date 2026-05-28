import { useState } from "react";
import "./Navbar.css";
import { Button } from "../Button/Button";
import logo from "../../assets/logos/logo.png";
import CoffeeIcon from "../../assets/icons/buy-me-coffee-icon.svg";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="nav-bar-container">
      <div className="logo">
        <img src={logo} alt="logo-image" />
        <span className="name-holder">SUSHANT</span>
      </div>

      <ul className="nav-item-container">
        <li className="nav-item">Home</li>
        <li className="nav-item">About</li>
        <li className="nav-item">Projects</li>
        <li className="nav-item">Contact</li>
        <li className="nav-item">Services</li>
      </ul>

      <div className="user-login-register-container">
        <Button type="primary" href="https://buymeacoffee.com/sushant_adhikari">
          <img className="coffee-icon" src={CoffeeIcon} alt="coffee-icon" />
          Buy Me a Coffee
        </Button>
      </div>

      <button
        className="hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </button>

      {/* Mobile dropdown menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            Home
          </li>
          <li className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            About
          </li>
          <li className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            Projects
          </li>
          <li className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            Contact
          </li>
          <li className="mobile-nav-item" onClick={() => setMenuOpen(false)}>
            Services
          </li>
        </ul>
        <div className="mobile-coffee-btn">
          <Button
            type="primary"
            href="https://buymeacoffee.com/sushant_adhikari"
          >
            <img className="coffee-icon" src={CoffeeIcon} alt="coffee-icon" />
            Buy Me a Coffee
          </Button>
        </div>
      </div>
    </nav>
  );
};
