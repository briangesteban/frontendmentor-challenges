import "./filter.scss";

interface IMode {
  lightMode: boolean;
}

const Filter = ({ lightMode }: IMode) => {
  return (
    <section className="filter">
      <select
        className={
          !lightMode
            ? "filter__dropdown"
            : "filter__dropdown filter__dropdown--drk-mode"
        }
        name="regions"
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
    </section>
  );
};

export { Filter };
