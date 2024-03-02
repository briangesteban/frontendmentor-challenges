import { GridLoader } from "react-spinners";
import { useState, useEffect } from "react";
import { fetchAllCountry } from "../../utils/apiUtils";
import "./CountryCard.scss";

interface IMode {
  lightMode: boolean;
}

const CountryCard = ({ lightMode }: IMode) => {
  const [countriesData, setCountriesData] = useState([]);

  // GET: All Countries Data
  const getCountries = async () => {
    try {
      const { data: allCountriesData } = await fetchAllCountry();
      setCountriesData(allCountriesData);
    } catch (err) {
      console.log(err);
    }
  };

  // Render data on first load
  useEffect(() => {
    getCountries();
  }, []);

  // Pending State
  if (!countriesData) {
    return (
      <div className="loader-wrapper" role="alert" aria-busy="true">
        <GridLoader color={!lightMode ? "#2b3945" : "#fff"} />
      </div>
    );
  }

  // Maps the Countries Data
  interface ICountryData {
    name: { common: string; official: string };
    flags: { svg: string; alt: string };
    flag: { png: string };
    population: number;
    region: string;
    capital: string;
  }

  const countriesList = countriesData.map((countryData: ICountryData) => {
    return (
      <article
        className={!lightMode ? "card" : "card card--drk-mode"}
        key={countryData.name.official}
      >
        <img
          className="card__flag"
          src={
            !countryData.flags.svg
              ? countryData.flag.png
              : countryData.flags.svg
          }
          alt={
            !countryData.flags.alt
              ? `Flag of ${countryData.name.common}`
              : countryData.flags.alt
          }
        />
        <div className="card__details">
          <h2 className="card__title">{countryData.name.official}</h2>
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
