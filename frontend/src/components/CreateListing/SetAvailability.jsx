import React, { useState } from "react";
import { useListing } from "../../context/ListingContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SetAvailability() {
  const { state, setField, prevStep, resetListing } = useListing();
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleSave = () => {
    if (startDate && endDate) {
      setField("availability", [startDate, endDate]);
      alert("Availability set successfully!");
      resetListing(); // optional: reset workflow after final step
    } else {
      alert("Please select both start and end dates.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <h2>Set Availability</h2>

      <div style={{ margin: "10px 0" }}>
        <label>Start Date</label>
        <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          selectsStart
          startDate={startDate}
          endDate={endDate}
          minDate={new Date()}
          placeholderText="Select start date"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ margin: "10px 0" }}>
        <label>End Date</label>
        <DatePicker
          selected={endDate}
          onChange={(date) => setEndDate(date)}
          selectsEnd
          startDate={startDate}
          endDate={endDate}
          minDate={startDate || new Date()}
          placeholderText="Select end date"
          style={{ width: "100%" }}
        />
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button onClick={handleSave} style={{ background: "green", color: "#fff", padding: "8px 12px" }}>
          Save Availability
        </button>
      </div>

      {state.availability.length > 0 && (
        <p style={{ marginTop: "15px" }}>
          Selected: {state.availability[0].toDateString()} → {state.availability[1].toDateString()}
        </p>
      )}
    </div>
  );
}

export default SetAvailability;