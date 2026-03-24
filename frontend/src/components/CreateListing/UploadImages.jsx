import React, { useRef } from "react";
import { useListing } from "../../context/ListingContext";

function UploadImages() {
  const { state, setField, nextStep, prevStep } = useListing();
  const fileInputRef = useRef();

  // Handle file selection
  const handleFiles = (e) => {
    const files = Array.from(e.target.files);
    const urls = files.map((file) => URL.createObjectURL(file));
    setField("images", [...(state.images || []), ...urls]);
  };

  // Remove an image
  const removeImage = (url) => {
    setField(
      "images",
      state.images.filter((img) => img !== url)
    );
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Upload Images</h2>

      <input
        type="file"
        multiple
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFiles}
        style={{ margin: "10px 0" }}
      />

      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "10px" }}>
        {state.images && state.images.map((img, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={img}
              alt={`Property ${idx + 1}`}
              style={{ width: "100px", height: "100px", objectFit: "cover", borderRadius: "5px" }}
            />
            <button
              onClick={() => removeImage(img)}
              style={{
                position: "absolute",
                top: "-5px",
                right: "-5px",
                background: "red",
                color: "#fff",
                border: "none",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        ))}
      </div>

      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep} style={{ marginRight: "10px" }}>Back</button>
        <button onClick={nextStep} disabled={!state.images || state.images.length === 0}>Next</button>
      </div>
    </div>
  );
}

export default UploadImages;