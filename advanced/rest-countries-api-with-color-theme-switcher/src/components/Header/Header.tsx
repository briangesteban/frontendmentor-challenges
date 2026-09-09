import "./Header.scss";

interface IMode {
  lightMode: boolean;
  setLightMode(lightMode: boolean): void;
}

const Header = ({ lightMode, setLightMode }: IMode) => {
  return (
    <header className={!lightMode ? "header" : "header header--drk-mode"}>
      <div className="header__wrapper">
        <h1
          className={
            !lightMode
              ? "header__title"
              : "header__title header__title--drk-mode"
          }
        >
          Where in the world?
        </h1>
        <button
          onClick={() => {
            lightMode === false ? setLightMode(true) : setLightMode(false);
          }}
          className={
            !lightMode
              ? "header__btn-mode"
              : "header__btn-mode header__btn-mode--drk-mode"
          }
          type="button"
        >
          {lightMode === false ? "Dark Mode" : "Light Mode"}
        </button>
      </div>
    </header>
  );
};

export { Header };
