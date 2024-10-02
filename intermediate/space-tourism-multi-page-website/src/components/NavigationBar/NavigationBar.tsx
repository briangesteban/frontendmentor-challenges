import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import BurgerIcon from "../../assets/shared/icon-hamburger.svg";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/home" className="nav-bar__link">
        <img src={Logo} alt="Space Tourism Logo" className="nav-bar__logo" />
      </Link>
      <button
        className="nav-bar__btn-burger"
        onClick={() => {
          console.log(true);
        }}
      >
        <img
          src={BurgerIcon}
          alt="Open Navigation Menu"
          className="nav-bar__btn-icon"
        />
      </button>
    </nav>
  );
};

export { NavigationBar };
