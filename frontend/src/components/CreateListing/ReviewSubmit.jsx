import React from "react";
import { useListing } from "../../context/ListingContext";

function ReviewSubmit() {
  const { state, prevStep, resetListing } = useListing();

  const handleSubmit = () => {
    // Here you would send 'state' to your backend API
    console.log("Submitting Listing:", state);
    alert("Listing submitted successfully!");
    resetListing(); // reset workflow
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Review Your Listing</h2>

      <div style={{ margin: "10px 0" }}>
        <strong>Category:</strong> {state.category || "-"}
      </div>

      <div style={{ margin: "10px 0" }}>
        <strong>Location:</strong> {state.country}, {state.location}, {state.address}
      </div>

      <div style={{ margin: "10px 0" }}>
        <strong>Basic Info:</strong> {state.bedrooms} Bed / {state.bathrooms} Bath / {state.guests} Guests
      </div>

      <div style={{ margin: "10px 0" }}>
        <strong>Amenities:</strong> {state.amenities.length ? state.amenities.join(", ") : "-"}
      </div>

      <div style={{ margin: "10px 0" }}>
        <strong>Images:</strong>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "5px" }}>
          {state.images && state.images.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`Property ${idx + 1}`}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
            />
          ))}
        </div>
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button onClick={handleSubmit} style={{ background: "green", color: "#fff", padding: "8px 12px" }}>
          Submit Listing
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;