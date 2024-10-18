import "./CrewContent.scss";

const CrewContent = () => {
  return (
    <section className="crew">
      <h2 className="crew__title">
        <span className="crew__title--number">02</span>Meet your crew
      </h2>
      <div className="crew__wrapper">
        <h3 className="crew__name">
          <span className="crew__name--rank">Commander</span>Douglas Hurley
        </h3>
        <p className="crew__detail">
          Douglas Gerald Hurley is an American engineer, former Marine Corps
          pilot and former NASA astronaut. He launched into space for the third
          time as commander of Crew Dragon Demo-2.
        </p>
        <div className="crew__carousel-nav">
          <span className="crew__carousel-button crew__carousel-button--active"></span>
          <span className="crew__carousel-button"></span>
          <span className="crew__carousel-button"></span>
          <span className="crew__carousel-button"></span>
        </div>
      </div>
      <div className="crew__wrapper">
        <img src="" alt="" className="crew__image" />
      </div>
    </section>
  );
};

export { CrewContent };
