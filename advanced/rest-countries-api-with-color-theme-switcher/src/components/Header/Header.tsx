import "./header.scss";

interface IMode {
  lightMode: boolean;
  setLightMode(lightMode: boolean): void;
}

const Header = ({ lightMode, setLightMode }: IMode) => {
  return (
    <header className="header">
      <h1 className="header__title">Where in the world?</h1>
      <button
        onClick={() => {
          lightMode === false ? setLightMode(true) : setLightMode(false);
        }}
        className="header__btn-mode"
        type="button"
      >
        {lightMode === false ? "Dark Mode" : "Light Mode"}
      </button>
    </header>
  );
};

export { Header };
