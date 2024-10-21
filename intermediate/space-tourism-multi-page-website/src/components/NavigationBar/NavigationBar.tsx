import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../utils/redux/state/store";
import { open, close } from "../../utils/redux/state/slices/isNavOpen";
import { update } from "../../utils/redux/state/slices/currentPath";
import Logo from "../../assets/shared/logo.svg";
import BurgerIcon from "../../assets/shared/icon-hamburger.svg";
import CloseIcon from "../../assets/shared/icon-close.svg";
import "./NavigationBar.scss";

const NavigationBar = () => {
  const navState: boolean = useSelector(
    (state: RootState): boolean => state.isNavOpen.value
  );
  const currPathState: string = useSelector(
    (state: RootState) => state.currentPath.value
  );
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  // Check current root path to prevent unwanted execution of useEffect.
  if (!pathname.startsWith(currPathState)) {
    if (pathname.startsWith("/home")) {
      dispatch(update("/home"));
    }
    if (pathname.startsWith("/destination")) {
      dispatch(update("/destination"));
    }
    if (pathname.startsWith("/crew")) {
      dispatch(update("/crew"));
    }
    if (pathname.startsWith("/technology")) {
      dispatch(update("/technology"));
    }
  }

  // Tracks current root path, dispatch reducer when changes happen.
  useEffect(() => {
    dispatch(close());
  }, [currPathState]);

  return (
    <nav className="nav-bar">
      <Link
        to="/home"
        tabIndex={navState ? -1 : 0}
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
              tabIndex={navState ? 0 : -1}
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
            tabIndex={navState ? 0 : -1}
            className={
              currPathState === "/home"
                ? "nav-bar__navigation-link nav-bar__navigation-link--active"
                : "nav-bar__navigation-link"
            }
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
            tabIndex={navState ? 0 : -1}
            className={
              currPathState === "/destination"
                ? "nav-bar__navigation-link nav-bar__navigation-link--active"
                : "nav-bar__navigation-link"
            }
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
            to="/crew/douglas"
            tabIndex={navState ? 0 : -1}
            className={
              currPathState === "/crew"
                ? "nav-bar__navigation-link nav-bar__navigation-link--active"
                : "nav-bar__navigation-link"
            }
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
            to="/technology"
            tabIndex={navState ? 0 : -1}
            className={
              currPathState === "/technology"
                ? "nav-bar__navigation-link nav-bar__navigation-link--active"
                : "nav-bar__navigation-link"
            }
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
