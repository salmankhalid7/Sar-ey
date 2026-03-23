import React from "react";

function ReviewSubmit({ data, prevStep, submitListing }) {

  return (
    <div>
      <h2>Review Your Listing</h2>

      <div style={{ marginBottom: "20px" }}>
        <h3>Property Type:</h3>
        <p>{data.category || "-"}</p>

        <h3>Location:</h3>
        <p>{data.address}, {data.location}, {data.country}</p>

        <h3>Basic Details:</h3>
        <p>Bedrooms: {data.bedrooms}</p>
        <p>Bathrooms: {data.bathrooms}</p>
        <p>Guests: {data.guests}</p>
        <p>Price per Night: {data.price}</p>

        <h3>Amenities:</h3>
        <p>{data.amenities.length ? data.amenities.join(", ") : "-"}</p>

        <h3>Images:</h3>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          {data.images.length > 0 ? (
            data.images.map((img, idx) => (
              <img
                key={idx}
                src={URL.createObjectURL(img)}
                alt={`listing-${idx}`}
                style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
              />
            ))
          ) : (
            <p>No images uploaded</p>
          )}
        </div>

        <h3>Availability:</h3>
        <p>{data.availability.length ? data.availability.join(", ") : "-"}</p>
      </div>

      <div>
        <button onClick={prevStep}>Back</button>
        <button
          onClick={submitListing}
          style={{ marginLeft: "10px" }}
        >
          Submit Listing
        </button>
      </div>
    </div>
  );
}

export default ReviewSubmit;