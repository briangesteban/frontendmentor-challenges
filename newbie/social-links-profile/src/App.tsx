import "./App.scss";
import { LinkCard } from "./components/LinkCard/LinkCard";

const App = () => {
  return (
    <main className="content">
      <h1 className="content__title">Link Tree</h1>
      <LinkCard />
    </main>
  );
};

export default App;
