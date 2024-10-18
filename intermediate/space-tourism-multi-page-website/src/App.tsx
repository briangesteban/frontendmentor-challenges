import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "./utils/redux/state/store";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomePage } from "./pages/HomePage";
import { DestinationPage } from "./pages/DestinationPage/DestinationPage";
import { CrewPage } from "./pages/CrewPage/CrewPage";
import { TechnologyPage } from "./pages/TechnologyPage/TechnologyPage";

import "./App.scss";

const App = () => {
  const EL_BODY: HTMLElement | null = document.getElementById("root");
  const navState: boolean = useSelector(
    (state: RootState): boolean => state.isNavOpen.value
  );

  // If Navigation Menu is open, Pointer Events on Body Element turns false.
  if (navState) {
    EL_BODY?.classList.add("pointer-evt--false");
  } else {
    EL_BODY?.classList.remove("pointer-evt--false");
  }

  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/destination/:loc" element={<DestinationPage />} />
        <Route path="/crew" element={<CrewPage />} />
        <Route path="/technology" element={<TechnologyPage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
