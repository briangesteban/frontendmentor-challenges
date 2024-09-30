import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";
import { HomePage } from "./pages/HomePage";
import "./App.scss";

const App = () => {
  return (
    <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="*" element={<h1>404: Page Not Found</h1>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
