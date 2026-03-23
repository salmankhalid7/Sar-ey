import React, { useRef, useState } from "react";

function UploadImages({ data, updateField, nextStep, prevStep }) {

  const fileInputRef = useRef();
  const [preview, setPreview] = useState(data.images || []);

  const handleFiles = (files) => {
    const imagesArray = Array.from(files).map((file) => ({
      file,
      url: URL.createObjectURL(file)
    }));

    const updated = [...preview, ...imagesArray];
    setPreview(updated);

    // Save only File objects in listingData
    updateField("images", updated.map((img) => img.file));
  };

  const handleRemove = (index) => {
    const updated = [...preview];
    updated.splice(index, 1);
    setPreview(updated);
    updateField("images", updated.map((img) => img.file));
  };

  return (
    <div>
      <h2>Upload Images</h2>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="file"
          multiple
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => handleFiles(e.target.files)}
        />
        <button onClick={() => fileInputRef.current.click()}>
          Select Images
        </button>
      </div>

      {/* Preview */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {preview.map((img, idx) => (
          <div key={idx} style={{ position: "relative" }}>
            <img
              src={img.url}
              alt={`preview-${idx}`}
              style={{ width: "120px", height: "80px", objectFit: "cover", borderRadius: "5px" }}
            />
            <button
              onClick={() => handleRemove(idx)}
              style={{
                position: "absolute",
                top: "0",
                right: "0",
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

      {/* Navigation */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={prevStep}>Back</button>
        <button
          onClick={() => {
            if (preview.length === 0) {
              alert("Please upload at least one image");
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

export default UploadImages;