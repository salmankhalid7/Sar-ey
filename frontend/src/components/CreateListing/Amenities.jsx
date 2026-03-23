import React, { useState } from "react";

function Amenities({ data, updateField, nextStep, prevStep }) {

  // Define available amenities
  const amenityOptions = [
    "WiFi",
    "Air Conditioning",
    "Parking",
    "Kitchen",
    "TV",
    "Washer",
    "Heating",
    "Pool",
    "Gym",
    "Hot Tub"
  ];

  const [selected, setSelected] = useState(data.amenities || []);

  const toggleAmenity = (amenity) => {
    let updated;
    if (selected.includes(amenity)) {
      updated = selected.filter((a) => a !== amenity);
    } else {
      updated = [...selected, amenity];
    }
    setSelected(updated);
    updateField("amenities", updated);
  };

  return (
    <div>
      <h2>Select Amenities</h2>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {amenityOptions.map((amenity) => (
          <button
            key={amenity}
            onClick={() => toggleAmenity(amenity)}
            style={{
              padding: "8px 12px",
              border: selected.includes(amenity) ? "2px solid #000" : "1px solid #ccc",
              background: selected.includes(amenity) ? "#e0e0e0" : "#fff",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            {amenity}
          </button>
        ))}
      </div>

      {/* Navigation */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep} style={{ marginLeft: "10px" }}>Next</button>
      </div>
    </div>
  );
}

export default Amenities;