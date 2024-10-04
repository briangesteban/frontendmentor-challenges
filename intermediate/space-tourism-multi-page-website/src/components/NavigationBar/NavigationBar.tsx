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
          const navigation = document.querySelector(".nav-bar__menu");
          navigation?.classList.add("nav-bar__menu--open");
        }}
      >
        <img
          src={BurgerIcon}
          alt="Open Navigation Menu"
          className="nav-bar__btn-icon"
        />
      </button>
      <aside className="nav-bar__menu">
        <div className="nav-bar__overlay"></div>
        <div className="nav-bar__navigation">
          <div className="nav-bar__btn-wrapper">
            <button
              className="nav-bar__btn-close"
              onClick={() => {
                const navigation = document.querySelector(".nav-bar__menu");
                navigation?.classList.remove("nav-bar__menu--open");
              }}
            >
              <img
                src={CloseIcon}
                alt="Close Navigation Menu"
                className="nav-bar__btn-icon"
              />
            </button>
          </div>
          <Link
            to="/"
            className="nav-bar__navigation-link nav-bar__navigation-link--active"
          >
            <span className="nav-bar__navigation-link--number">00</span> Home
          </Link>
          <Link to="/" className="nav-bar__navigation-link">
            <span className="nav-bar__navigation-link--number">01</span>{" "}
            Destination
          </Link>
          <Link to="/" className="nav-bar__navigation-link">
            <span className="nav-bar__navigation-link--number">02</span> Crew
          </Link>
          <Link to="/" className="nav-bar__navigation-link">
            <span className="nav-bar__navigation-link--number">03</span>{" "}
            Technology
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export { NavigationBar };
