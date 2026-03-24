import React from "react";
import { useListing } from "../../context/ListingContext";

function BasicInfo() {
  const { state, setField, nextStep, prevStep } = useListing();

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Basic Info</h2>

      {/* Bedrooms */}
      <div style={{ margin: "10px 0" }}>
        <label>Bedrooms</label>
        <input
          type="number"
          min="1"
          value={state.bedrooms}
          onChange={(e) => setField("bedrooms", Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Bathrooms */}
      <div style={{ margin: "10px 0" }}>
        <label>Bathrooms</label>
        <input
          type="number"
          min="1"
          value={state.bathrooms}
          onChange={(e) => setField("bathrooms", Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Guests */}
      <div style={{ margin: "10px 0" }}>
        <label>Guests</label>
        <input
          type="number"
          min="1"
          value={state.guests}
          onChange={(e) => setField("guests", Number(e.target.value))}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button onClick={nextStep}>Next</button>
      </div>
    </div>
  );
}

export default BasicInfo;