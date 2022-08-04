import React from "react";
import Assig1 from "./Assignement-1/index";
import Assig2 from "./Assignement-2/index";
import Home from "./Home/index";
import "./App.css"
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/assig1" element={<Assig1 />} />
        <Route path="/assig2" element={<Assig2 />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
