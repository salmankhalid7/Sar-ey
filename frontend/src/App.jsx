import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import WelcomeListing from "./components/CreatListing/WelcomeListing";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/WelcomeListing" element={<WelcomeListing/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
