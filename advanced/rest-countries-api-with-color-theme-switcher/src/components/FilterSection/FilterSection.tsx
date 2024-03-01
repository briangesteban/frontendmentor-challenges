import { SearchBar, FilterRegion } from "../InputFields/InputFields";
import "./filter-section.scss";

interface IMode {
  lightMode: boolean;
}

const FilterSection = ({ lightMode }: IMode) => {
  return (
    <section className="filter-section">
      <SearchBar lightMode={lightMode} />
      <FilterRegion lightMode={lightMode} />
    </section>
  );
};

export { FilterSection };
