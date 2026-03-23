import React, { useState } from "react";

function SetAvailability({ data, updateField, nextStep, prevStep }) {
  const [dates, setDates] = useState(data.availability || []);

  const handleAddDate = (e) => {
    const selectedDate = e.target.value;
    if (!dates.includes(selectedDate)) {
      const updated = [...dates, selectedDate].sort();
      setDates(updated);
      updateField("availability", updated);
    }
  };

  const handleRemoveDate = (date) => {
    const updated = dates.filter((d) => d !== date);
    setDates(updated);
    updateField("availability", updated);
  };

  return (
    <div>
      <h2>Set Availability</h2>

      <input
        type="date"
        onChange={handleAddDate}
        style={{ marginBottom: "10px" }}
      />

      <div style={{ marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "5px" }}>
        {dates.map((date, idx) => (
          <div
            key={idx}
            style={{
              padding: "5px 10px",
              border: "1px solid #ccc",
              borderRadius: "5px",
              display: "flex",
              alignItems: "center",
              gap: "5px"
            }}
          >
            {date}
            <button
              onClick={() => handleRemoveDate(date)}
              style={{
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "18px",
                height: "18px",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep}>Back</button>
        <button
          onClick={() => {
            if (dates.length === 0) {
              alert("Please select at least one date");
              return;
            }
            nextStep();
          }}
          style={{ marginLeft: "10px" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default SetAvailability;