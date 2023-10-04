import { Route, Routes } from "react-router-dom";
import "./App.css";
import CarList from "./pages/CarList";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <main className="w-full max-w-7xl min-h-screen mx-auto overflow-hidden bg-[#101426] flex flex-col">
      <Navbar />
      <Routes>
        <Route path="/" element={<CarList />} />
        <Route path="/page/:page" element={<CarList />} />
        <Route path="/search/:query" element={<Search />} />
      </Routes>
    </main>
  );
};

export default App;
