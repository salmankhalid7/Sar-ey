import React, { useState } from "react";
import ReviewSubmit from "../components/CreateListing/ReviewSubmit";
import SetAvailability from "../components/CreateListing/SetAvailability";
import UploadImages from "../components/CreateListing/UploadImages";
import Amenities from "../components/CreateListing/Amenities";
import WelcomeListing from "../components/CreateListing/WelcomeListing";
import HomeCategories from "../components/CreateListing/HomeCategories";
import LocationAddress from "../components/CreateListing/LocationAddress";
import BasicDetails from "../components/CreateListing/BasicDetails";

function CreateListing() {
  const [step, setStep] = useState(1);

  const [listingData, setListingData] = useState({
    category: "",
    country: "",
    location: "",
    address: "",
    bedrooms: 1,
    bathrooms: 1,
    guests: 1,
    price: "",
    amenities: [],
    images: [],
    availability: [],
  });

  const updateField = (field, value) => {
    setListingData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return <WelcomeListing nextStep={nextStep} />;

      case 2:
        return (
          <HomeCategories
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );

      case 3:
        return (
          <LocationAddress
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 4:
        return (
          <BasicDetails
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 5:
        return (
          <Amenities
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 6:
        return (
          <UploadImages
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 7:
        return (
          <SetAvailability
            data={listingData}
            updateField={updateField}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        );
      case 8:
        return (
          <ReviewSubmit
            data={listingData}
            prevStep={prevStep}
            submitListing={() => {
              // For now, just log
              console.log("Submitting listing:", listingData);
              alert("Listing submitted successfully!");
            }}
          />
        );
      default:
        return <WelcomeListing />;
    }
  };

  return <div>{renderStep()}</div>;
}

export default CreateListing;
