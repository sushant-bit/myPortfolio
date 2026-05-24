import "./Navbar.css";
import { Button } from "../Button/Button";
import logo from "../../assets/logos/logo.png";
import CoffeeIcon from "../../assets/icons/buy-me-coffee-icon.svg";

export const Navbar = () => {
  return (
    <nav className="nav-bar-container">
      <div className="logo">
        <img src={logo} alt="logo-image" />
        <span className="name-holder">SUSHANT</span>
      </div>
      <ul className="nav-item-container">
        <li className="nav-item nav-home">Home</li>
        <li className="nav-item nav-about">About</li>
        <li className="nav-item nav-projects">Projects</li>
        <li className="nav-item nav-coqntact">Contact</li>
        <li className="nav-item nav-service">Services</li>
      </ul>
      <div className="user-login-register-container">
        <Button type="primary" href="https://buymeacoffee.com/sushant_adhikari">
          <img className="coffee-icon" src={CoffeeIcon} alt="coffee-icon" />
          Buy Me a Coffee
        </Button>
      </div>
    </nav>
  );
};
