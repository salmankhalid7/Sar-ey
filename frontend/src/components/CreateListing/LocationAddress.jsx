import React from "react";

function LocationAddress({
  data,
  updateField,
  nextStep,
  prevStep
}) {

  return (
    <div>

      <h2>Location & Address</h2>

      {/* Country */}
      <div>
        <label>Country</label>

        <input
          type="text"
          placeholder="Enter Country"
          value={data.country || ""}
          onChange={(e) =>
            updateField("country", e.target.value)
          }
        />
      </div>

      {/* City */}
      <div>
        <label>City</label>

        <input
          type="text"
          placeholder="Enter City"
          value={data.location}
          onChange={(e) =>
            updateField("location", e.target.value)
          }
        />
      </div>

      {/* Address */}
      <div>
        <label>Full Address</label>

        <input
          type="text"
          placeholder="Enter Full Address"
          value={data.address}
          onChange={(e) =>
            updateField("address", e.target.value)
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

export default LocationAddress;