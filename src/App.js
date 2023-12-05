import "./App.css";
import { Route, Routes } from "react-router-dom";
import TravelPlaceInfo from "./pages/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<TravelPlaceInfo />} />
    </Routes>
  );
}

export default App;
