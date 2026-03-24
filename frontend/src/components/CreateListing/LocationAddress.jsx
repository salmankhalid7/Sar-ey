import React from "react";
import { useListing } from "../../context/ListingContext";

function LocationAddress() {
  const { state, setField, nextStep, prevStep } = useListing();

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Location & Address</h2>

      {/* Country */}
      <div style={{ margin: "10px 0" }}>
        <label>Country</label>
        <input
          type="text"
          placeholder="Enter Country"
          value={state.country}
          onChange={(e) => setField("country", e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* City */}
      <div style={{ margin: "10px 0" }}>
        <label>City</label>
        <input
          type="text"
          placeholder="Enter City"
          value={state.location}
          onChange={(e) => setField("location", e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Full Address */}
      <div style={{ margin: "10px 0" }}>
        <label>Full Address</label>
        <input
          type="text"
          placeholder="Enter Full Address"
          value={state.address}
          onChange={(e) => setField("address", e.target.value)}
          style={{ width: "100%", padding: "8px", marginTop: "5px" }}
        />
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button 
          onClick={nextStep} 
          disabled={!state.country || !state.location || !state.address}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default LocationAddress;