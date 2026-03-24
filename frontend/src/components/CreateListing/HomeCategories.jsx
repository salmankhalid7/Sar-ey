import React from "react";
import { useListing } from "../../context/ListingContext";

function HomeCategories() {
  const { state, setField, nextStep, prevStep } = useListing();

  // Handle selection of property type
  const handleSelect = (type) => {
    setField("category", type);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Select Property Type</h2>
      
      <div style={{ margin: "20px 0" }}>
        <button 
          onClick={() => handleSelect("Apartment")} 
          style={{ marginRight: "10px" }}
        >
          Apartment
        </button>

        <button 
          onClick={() => handleSelect("House")} 
          style={{ marginRight: "10px" }}
        >
          House
        </button>

        <button onClick={() => handleSelect("Villa")}>Villa</button>
      </div>

      <p>Selected: <strong>{state.category || "None"}</strong></p>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button 
          onClick={nextStep} 
          disabled={!state.category} // prevent going forward if none selected
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default HomeCategories;