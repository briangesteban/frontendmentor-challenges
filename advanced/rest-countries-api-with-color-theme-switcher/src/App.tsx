import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Filter } from "./components/Filter/Filter";
import "./App.scss";

const App = () => {
  const [lightMode, setLightMode] = useState(false); // Lighting Mode State

  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <main>
        <SearchBar />
        <Filter />
      </main>
    </>
  );
};

export default App;
