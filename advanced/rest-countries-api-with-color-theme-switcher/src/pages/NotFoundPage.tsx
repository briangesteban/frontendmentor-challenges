import { NotFound } from "../components/NotFound/NotFound";

interface IMode {
  lightMode: boolean;
}

const NotFoundPage = ({ lightMode }: IMode) => {
  return (
    <main>
      <NotFound lightMode={lightMode} />
    </main>
  );
};

export { NotFoundPage };
