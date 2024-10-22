import { Link, Navigate, useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./DestinationContent.scss";

interface IDestinations {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  description: string;
  distance: string;
  travel: string;
}

const DestinationContent = () => {
  const { loc: urlParam } = useParams();
  const destinationsData: IDestinations[] = data.destinations;
  const destinations: IDestinations | undefined = destinationsData.find(
    (destination) => destination.name.toLowerCase() === urlParam
  );

  // Redirect to Not Found Page
  if (!destinations) {
    return <Navigate to="not-found" />;
  }

  return (
    <section className="destination">
      <h2 className="destination__page-title">
        <span className="destination__page-title--number" aria-hidden="true">
          01
        </span>
        Pick Your Destination
      </h2>
      <div className="destination__wrapper">
        <picture>
          <source type="image/webp" srcSet={destinations?.images.webp} />
          <img
            src={destinations?.images.png}
            alt={destinations?.name}
            className="destination__image"
          />
        </picture>
      </div>
      <div className="destination__wrapper">
        <div className="destination__nav">
          <Link
            to="/destination/moon"
            className={
              urlParam === "moon"
                ? "destination__nav-link destination__nav-link--active"
                : "destination__nav-link"
            }
          >
            Moon
          </Link>
          <Link
            to="/destination/mars"
            className={
              urlParam === "mars"
                ? "destination__nav-link destination__nav-link--active"
                : "destination__nav-link"
            }
          >
            Mars
          </Link>
          <Link
            to="/destination/europa"
            className={
              urlParam === "europa"
                ? "destination__nav-link destination__nav-link--active"
                : "destination__nav-link"
            }
          >
            Europa
          </Link>
          <Link
            to="/destination/titan"
            className={
              urlParam === "titan"
                ? "destination__nav-link destination__nav-link--active"
                : "destination__nav-link"
            }
          >
            Titan
          </Link>
        </div>
        <h3 className="destination__title">{destinations?.name}</h3>
        <p className="destination__details">{destinations?.description}</p>
        <div className="destination-stat">
          <h4 className="destination-stat__detail">
            Avg. Distance
            <span className="destination-stat__detail-value">
              {destinations?.distance}
            </span>
          </h4>
          <h4 className="destination-stat__detail">
            Est. Travel Time
            <span className="destination-stat__detail-value">
              {destinations?.travel}
            </span>
          </h4>
        </div>
      </div>
    </section>
  );
};

export { DestinationContent };
