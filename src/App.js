import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/Main";
import Fire from "./pages/Fire";
import Wave from "./pages/Wave";
import Forest from "./pages/Forest";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/fire" element={<Fire />} />
        <Route path="/wave" element={<Wave />} />
        <Route path="/forest" element={<Forest />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
