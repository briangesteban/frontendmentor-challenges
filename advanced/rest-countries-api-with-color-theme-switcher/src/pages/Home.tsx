import { Header } from "../components/Header/Header";
import { FilterSection } from "../components/FilterSection/FilterSection";
import { CountryCard } from "../components/CountryCard/CountryCard";

interface IMode {
  lightMode: boolean;
  setLightMode(lightMode: boolean): void;
}

const Home = ({ lightMode, setLightMode }: IMode) => {
  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <main>
        <FilterSection lightMode={lightMode} />
        <CountryCard lightMode={lightMode} />
      </main>
    </>
  );
};

export { Home };
