import React from "react";

function BasicDetails({
  data,
  updateField,
  nextStep,
  prevStep
}) {

  return (
    <div>

      <h2>Basic Property Details</h2>

      {/* Bedrooms */}
      <div>

        <label>Bedrooms</label>

        <input
          type="number"
          min="1"
          value={data.bedrooms}
          onChange={(e) =>
            updateField("bedrooms", e.target.value)
          }
        />

      </div>

      {/* Bathrooms */}
      <div>

        <label>Bathrooms</label>

        <input
          type="number"
          min="1"
          value={data.bathrooms}
          onChange={(e) =>
            updateField("bathrooms", e.target.value)
          }
        />

      </div>

      {/* Guests */}
      <div>

        <label>Max Guests</label>

        <input
          type="number"
          min="1"
          value={data.guests}
          onChange={(e) =>
            updateField("guests", e.target.value)
          }
        />

      </div>

      {/* Price */}
      <div>

        <label>Price per Night</label>

        <input
          type="number"
          placeholder="Enter price"
          value={data.price}
          onChange={(e) =>
            updateField("price", e.target.value)
          }
        />

      </div>

      {/* Navigation Buttons */}

      <div>

        <button onClick={prevStep}>
          Back
        </button>

        <button onClick={nextStep}>
          Next
        </button>

      </div>

    </div>
  );

}

export default BasicDetails;