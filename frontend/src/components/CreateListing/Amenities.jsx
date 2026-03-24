import React from "react";
import { useListing } from "../../context/ListingContext";

const AMENITIES_LIST = [
  "WiFi",
  "Air Conditioning",
  "Heating",
  "Kitchen",
  "Parking",
  "Pool",
  "Gym",
  "Washer",
  "Dryer",
  "Pet Friendly"
];

function Amenities() {
  const { state, setField, nextStep, prevStep } = useListing();

  const handleToggle = (amenity) => {
    const current = state.amenities || [];
    if (current.includes(amenity)) {
      setField(
        "amenities",
        current.filter((a) => a !== amenity)
      );
    } else {
      setField("amenities", [...current, amenity]);
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Select Amenities</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {AMENITIES_LIST.map((amenity) => (
          <button
            key={amenity}
            onClick={() => handleToggle(amenity)}
            style={{
              padding: "8px 12px",
              border: state.amenities.includes(amenity) ? "2px solid green" : "1px solid #ccc",
              borderRadius: "5px",
              cursor: "pointer",
              background: state.amenities.includes(amenity) ? "#e0ffe0" : "#fff"
            }}
          >
            {amenity}
          </button>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button onClick={nextStep} disabled={state.amenities.length === 0}>Next</button>
      </div>
    </div>
  );
}

export default Amenities;