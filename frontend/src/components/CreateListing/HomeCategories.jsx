import React from "react";

function HomeCategories({
  data,
  updateField,
  nextStep,
  prevStep
}) {

  const handleSelect = (type) => {

    updateField("category", type);

  };

  return (
    <div>

      <h2>Select Property Type</h2>

      <button
        onClick={() => handleSelect("Apartment")}
      >
        Apartment
      </button>

      <button
        onClick={() => handleSelect("House")}
      >
        House
      </button>

      <button
        onClick={() => handleSelect("Villa")}
      >
        Villa
      </button>

      <div>

        <button onClick={prevStep}>
          Back
        </button>

        <button onClick={nextStep}>
          Next
        </button>

      </div>

      <p>
        Selected: {data.category}
      </p>

    </div>
  );

}

export default HomeCategories;