import "./search-bar.scss";

interface IMode {
  lightMode: boolean;
}

const SearchBar = ({ lightMode }: IMode) => {
  return (
    <section className="search-bar">
      <input
        className={
          !lightMode
            ? "search-bar__field"
            : "search-bar__field search-bar__field--drk-mode"
        }
        type="search"
        placeholder="Search for a country..."
      />
    </section>
  );
};

export { SearchBar };
