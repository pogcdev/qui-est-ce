import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Difficulty from "./pages/Difficulty";
import Multi from "./pages/Multi";
import NotFound from "./pages/NotFound";
import Rules from "./pages/Rules";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/difficulty" element={<Difficulty />} />
        <Route path="/multi" element={<Multi />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
