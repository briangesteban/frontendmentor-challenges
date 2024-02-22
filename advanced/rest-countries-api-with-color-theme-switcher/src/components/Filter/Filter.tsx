import "./filter.scss";

const Filter = () => {
  return (
    <section className="filter">
      <select className="filter__dropdown" name="regions">
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
