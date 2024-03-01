import "./NotFound.scss";

interface IMode {
  lightMode: boolean;
}

const NotFound = ({ lightMode }: IMode) => {
  return (
    <section className="not-found">
      <h2
        className={
          !lightMode
            ? "not-found__title"
            : "not-found__title not-found__title--drk-mode"
        }
      >
        404: Page Not Found
      </h2>
      <p
        className={
          !lightMode
            ? "not-found__content"
            : "not-found__content not-found__content--drk-mode"
        }
      >
        Sorry, the page you are trying to access is not available or no longer
        existing.
      </p>
    </section>
  );
};

export { NotFound };
