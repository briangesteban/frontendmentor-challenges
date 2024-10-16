import { Link } from "react-router-dom";
import MoonImagePng from "../../assets/destination/image-moon.png";
import MoonImageWebp from "../../assets/destination/image-moon.webp";
import "./DestinationContent.scss";

const DestinationContent = () => {
  return (
    <section className="destination">
      <h2 className="destination__page-title">
        <span className="destination__page-title--number">01</span>Pick Your
        Destination
      </h2>
      <div className="destination__wrapper">
        <picture className="destination__image-stack">
          <source src={MoonImageWebp} type="webp" />
          <img src={MoonImagePng} alt="Moon" className="destination__image" />
        </picture>
      </div>
      <div className="destination__wrapper">
        <div className="destination__nav">
          <Link
            to="/destination/moon"
            className="destination__nav-link destination__nav-link--active"
          >
            Moon
          </Link>
          <Link to="/destination/mars" className="destination__nav-link">
            Mars
          </Link>
          <Link to="/destination/europa" className="destination__nav-link">
            Europa
          </Link>
          <Link to="/destination/titan" className="destination__nav-link">
            Titan
          </Link>
        </div>
        <h3 className="destination__title">Moon</h3>
        <p className="destination__details">
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>
        <div className="destination-stat">
          <h4 className="destination-stat__detail">
            Avg. Distance
            <span className="destination-stat__detail-value">384,400 km</span>
          </h4>
          <h4 className="destination-stat__detail">
            Est. Travel Time
            <span className="destination-stat__detail-value">3 Days</span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export { DestinationContent };
