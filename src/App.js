import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Cart from "./components/Cart";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
