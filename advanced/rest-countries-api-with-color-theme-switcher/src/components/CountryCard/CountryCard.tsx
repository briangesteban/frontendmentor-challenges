import countriesData from "../../data/countries.json";
import "./country-card.scss";

const CountryCard = () => {
  // Maps the Countries Data
  const countriesList = countriesData.map((countryData) => {
    return (
      <article className="card" key={countryData.name}>
        <img
          className="card__flag"
          src={!countryData.flags ? countryData.flag : countryData.flags.svg}
          alt={`Flag of ${countryData.name}`}
        />
        <div className="card__details">
          <h2 className="card__title">{countryData.name}</h2>
          <div className="card__info-wrapper">
            <h3 className="card__info-title">Population:</h3>
            <p className="card__info-context">{countryData.population}</p>
          </div>
          <div className="card__info-wrapper">
            <h3 className="card__info-title">Region:</h3>
            <p className="card__info-context">{countryData.region}</p>
          </div>
          <div className="card__info-wrapper">
            <h3 className="card__info-title">Capital:</h3>
            <p className="card__info-context">{countryData.capital}</p>
          </div>
        </div>
      </article>
    );
  });
  return <section className="card-wrapper">{countriesList}</section>;
};

export { CountryCard };
