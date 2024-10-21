import { Link, Navigate, useParams } from "react-router-dom";
import data from "../../data/data.json";
import "./CrewContent.scss";

interface ICrewData {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

interface ICrew {
  name: string;
  images: {
    png: string;
    webp: string;
  };
  role: string;
  bio: string;
}

const CrewContent = () => {
  const { crew: urlParam } = useParams();
  const crewData: ICrewData[] = data.crew;
  const crew: ICrew | undefined = crewData.find((member) => {
    if (urlParam) {
      return member.name.toLowerCase().includes(urlParam);
    } else {
      return false;
    }
  });

  // Redirect to Not Found Page
  if (!crew) {
    return <Navigate to="not-found" />;
  }

  return (
    <section className="crew">
      <h2 className="crew__title">
        <span className="crew__title--number" aria-hidden="true">
          02
        </span>
        Meet your crew
      </h2>
      <div className="crew__wrapper">
        <h3 className="crew__name">
          <span className="crew__name--role">{crew?.role}</span>
          {crew?.name}
        </h3>
        <p className="crew__biography">{crew?.bio}</p>
        <div className="crew__carousel">
          <div className="crew__carousel-nav">
            <Link
              to="/crew/douglas"
              className={
                urlParam === "douglas"
                  ? "crew__carousel-button crew__carousel-button--active"
                  : "crew__carousel-button"
              }
              aria-label="Go to Commander Douglas Hurley's Profile"
            ></Link>
            <Link
              to="/crew/mark"
              className={
                urlParam === "mark"
                  ? "crew__carousel-button crew__carousel-button--active"
                  : "crew__carousel-button"
              }
              aria-label="Go to Mission Specialist Mark Shuttleworth's Profile"
            ></Link>
            <Link
              to="/crew/victor"
              className={
                urlParam === "victor"
                  ? "crew__carousel-button crew__carousel-button--active"
                  : "crew__carousel-button"
              }
              aria-label="Go to Pilot Victor Glover's Profile"
            ></Link>
            <Link
              to="/crew/anousheh"
              className={
                urlParam === "anousheh"
                  ? "crew__carousel-button crew__carousel-button--active"
                  : "crew__carousel-button"
              }
              aria-label="Go to Flight Engineer Anousheh Ansari's Profile"
            ></Link>
          </div>
        </div>
      </div>
      <div className="crew__wrapper">
        <picture>
          <source type="image/webp" srcSet={crew?.images.webp} />
          <img
            src={crew?.images.png}
            alt={crew?.name}
            className="crew__image"
          />
        </picture>
      </div>
    </section>
  );
};

export { CrewContent };
