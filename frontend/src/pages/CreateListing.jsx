import React from "react";
import { useListing } from "../context/ListingContext";
import WelcomeListing from "../components/CreateListing/WelcomeListing";
import HomeCategories from "../components/CreateListing/HomeCategories";
import LocationAddress from "../components/CreateListing/LocationAddress";
import BasicInfo from "../components/CreateListing/BasicInfo";
import Amenities from "../components/CreateListing/Amenities";
import UploadImages from "../components/CreateListing/UploadImages";
import ReviewSubmit from "../components/CreateListing/ReviewSubmit"; // Step 7
import SetAvailability from "../components/CreateListing/SetAvailability"; // Step 8

function CreateListing() {
  const { state } = useListing();

  const renderStep = () => {
    switch (state.step) {
      case 1:
        return <WelcomeListing />;
      case 2:
        return <HomeCategories />;
      case 3:
        return <LocationAddress />;
      case 4:
        return <BasicInfo />;
      case 5:
        return <Amenities />;
      case 6:
        return <UploadImages />;
      case 7:
        return <SetAvailability />; // moved here
      case 8:
        return <ReviewSubmit />; // final step
      default:
        return <WelcomeListing />;
    }
  };

  return <div>{renderStep()}</div>;
}

export default CreateListing;
