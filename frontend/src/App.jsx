import React from "react";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";

import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/create-listing"
          element={<CreateListing />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;