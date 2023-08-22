import React from "react";
import "./index.css";
import MainPage from "./components/Home";
import BedroomComponent from "./components/slides/BedroomComponent";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import ThirdBillboard from "./components/slides/ThirdBillboard";

function App() {
  return (
    <div className="h-screen w-full">
      <Routes>
        <Route path="/" exact element={<MainPage />} />
        <Route path="/slide" element={<BedroomComponent />} />
        <Route path="/slide/ThirdBillboard" element={<ThirdBillboard />} />
      </Routes>
    </div>
  );
}

export default App;
