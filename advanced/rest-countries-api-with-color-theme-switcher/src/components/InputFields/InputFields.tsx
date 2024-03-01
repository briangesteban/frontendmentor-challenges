import "./input-fields.scss";

interface IMode {
  lightMode: boolean;
}

// Search Bar Field
const SearchBar = ({ lightMode }: IMode) => {
  return (
    <div className="search-bar">
      <input
        className={
          !lightMode
            ? "search-bar__field"
            : "search-bar__field search-bar__field--drk-mode"
        }
        type="search"
        id="search"
        placeholder="Search for a country..."
      />
    </div>
  );
};

// Filter Region Field
const FilterRegion = ({ lightMode }: IMode) => {
  return (
    <div className="filter-region">
      <select
        className={
          !lightMode
            ? "filter-region__dropdown"
            : "filter-region__dropdown filter-region__dropdown--drk-mode"
        }
        name="regions"
        id="regions"
      >
        <option value="" selected disabled hidden>
          Filter by Region
        </option>
        <option value="Africa">Africa</option>
        <option value="America">America</option>
        <option value="Asia">Asia</option>
        <option value="Europe">Europe</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export { SearchBar, FilterRegion };
