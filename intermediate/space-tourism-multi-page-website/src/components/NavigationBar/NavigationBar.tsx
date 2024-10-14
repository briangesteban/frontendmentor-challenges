import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../utils/redux/state/store";
import { open, close } from "../../utils/redux/state/slices/isNavOpen";
import Logo from "../../assets/shared/logo.svg";
import BurgerIcon from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const navState: boolean = useSelector(
    (state: RootState): boolean => state.isNavOpen.value
  );
  const dispatch = useDispatch();

  return (
    <nav className="nav-bar">
      <Link
        to="/home"
        className="nav-bar__link"
        aria-label="Go to Space Tourism Home Page"
      >
        <img src={Logo} alt="Space Tourism Logo" className="nav-bar__logo" />
      </Link>
      <button
        className="nav-bar__btn-burger"
        onClick={() => {
          dispatch(open());
        }}
      >
        <img
          src={BurgerIcon}
          alt="Open Navigation Menu"
          className="nav-bar__btn-icon"
        />
      </button>
      <aside
        className={
          !navState ? "nav-bar__menu" : "nav-bar__menu nav-bar__menu--open"
        }
      >
        <div className="nav-bar__overlay"></div>
        <div className="nav-bar__navigation">
          <div className="nav-bar__btn-wrapper nav-bar__btn-wrapper--close">
            <button
              className="nav-bar__btn-close"
              onClick={() => {
                dispatch(close());
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
            to="/home"
            className="nav-bar__navigation-link nav-bar__navigation-link--active"
            aria-label="Go to Home Page"
          >
            <span
              className="nav-bar__navigation-link--number"
              aria-hidden="true"
            >
              00
            </span>
            Home
          </Link>
          <Link
            to="/destination/moon"
            className="nav-bar__navigation-link"
            aria-label="Go to Destination Page"
          >
            <span
              className="nav-bar__navigation-link--number"
              aria-hidden="true"
            >
              01
            </span>
            Destination
          </Link>
          <Link
            to="/"
            className="nav-bar__navigation-link"
            aria-label="Go to Crew Page"
          >
            <span
              className="nav-bar__navigation-link--number"
              aria-hidden="true"
            >
              02
            </span>
            Crew
          </Link>
          <Link
            to="/"
            className="nav-bar__navigation-link"
            aria-label="Go to Technology Page"
          >
            <span
              className="nav-bar__navigation-link--number"
              aria-hidden="true"
            >
              03
            </span>
            Technology
          </Link>
        </div>
      </aside>
    </nav>
  );
};

export { NavigationBar };
