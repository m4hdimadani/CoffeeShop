import {  Route, Routes } from "react-router-dom";

import HomePage from "./components/HomePage";
import Product from "./components/Product";
import Conformation from "./components/Conformation";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/product" element={<Product />} />
      <Route path="/conformation" element={<Conformation />} />
    </Routes>
  );
}

export default App;
