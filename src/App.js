import "./App.css";
import { Route, Routes } from "react-router-dom";
import TravelPlaceSearch from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelPlaceSearch />} />
    </Routes>
  );
}

export default App;
