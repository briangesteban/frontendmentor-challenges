import { useState } from "react";
import { Header } from "./components/Header/Header";
import { SearchBar } from "./components/SearchBar/SearchBar";
import { Filter } from "./components/Filter/Filter";
import { CountryCard } from "./components/CountryCard/CountryCard";
import "./App.scss";

const App = () => {
  const [lightMode, setLightMode] = useState(false); // Lighting Mode State
  const bodyEl = document.getElementById("root") as HTMLElement; // Query Body Element

  // Change Lighting Mode for the body element
  !lightMode
    ? bodyEl.removeAttribute("class")
    : bodyEl.classList.add("body--drk-mode");

  return (
    <>
      <Header lightMode={lightMode} setLightMode={setLightMode} />
      <main>
        <SearchBar lightMode={lightMode} />
        <Filter lightMode={lightMode} />
        <CountryCard lightMode={lightMode} />
      </main>
    </>
  );
};

export default App;
