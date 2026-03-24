import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListingProvider } from "./context/ListingContext";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";

function App() {
  return (
    <ListingProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-listing" element={<CreateListing />} />
        </Routes>
      </BrowserRouter>
    </ListingProvider>
  );
}

export default App;