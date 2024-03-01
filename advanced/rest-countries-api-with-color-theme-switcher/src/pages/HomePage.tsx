import { FilterSection } from "../components/FilterSection/FilterSection";
import { CountryCard } from "../components/CountryCard/CountryCard";

interface IMode {
  lightMode: boolean;
}

const HomePage = ({ lightMode }: IMode) => {
  return (
    <main>
      <FilterSection lightMode={lightMode} />
      <CountryCard lightMode={lightMode} />
    </main>
  );
};

export { HomePage };
