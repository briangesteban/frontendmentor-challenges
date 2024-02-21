import "./search-bar.scss";

const SearchBar = () => {
  return (
    <section className="search-bar">
      <input
        className="search-bar__field"
        type="search"
        placeholder="Search for a country..."
      />
    </section>
  );
};

export { SearchBar };
