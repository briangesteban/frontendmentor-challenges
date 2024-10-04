import { Link } from "react-router-dom";
import Logo from "../../assets/shared/logo.svg";
import BurgerIcon from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";
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
      <div className="nav-bar__overlay"></div>
      <aside className="nav-bar__menu">
        <div className="nav-bar__btn-wrapper">
          <button
            className="nav-bar__btn-close"
            onClick={() => console.log("test")}
          >
            <img
              src={CloseIcon}
              alt="Close Navigation Menu"
              className="nav-bar__btn-icon"
            />
          </button>
        </div>
        <Link to="/" className="nav-bar__menu-link nav-bar__menu-link--active">
          <span className="nav-bar__menu-link--number">00</span> Home
        </Link>
        <Link to="/" className="nav-bar__menu-link">
          <span className="nav-bar__menu-link--number">01</span> Destination
        </Link>
        <Link to="/" className="nav-bar__menu-link">
          <span className="nav-bar__menu-link--number">02</span> Crew
        </Link>
        <Link to="/" className="nav-bar__menu-link">
          <span className="nav-bar__menu-link--number">03</span> Technology
        </Link>
      </aside>
    </nav>
  );
};

export { NavigationBar };
