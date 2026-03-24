import React from "react";
import { useListing } from "../../context/ListingContext";

function WelcomeListing() {
  const { nextStep } = useListing();

  return (
    <div style={{ padding: "20px", maxWidth: "400px", margin: "auto" }}>
      <h1>Welcome to Saraey</h1>
      <p>Let's start adding your home!</p>
      <button onClick={nextStep} style={{ marginTop: "20px" }}>
        Start Listing
      </button>
    </div>
  );
}

export default WelcomeListing;