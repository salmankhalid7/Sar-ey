import React, { useEffect } from "react";
import { useState } from "react";
function LocationPortal() {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    const getLocation = async () => {
      try {
        const response = await fetch("http://ip-api.com/json/");
        const data = await response.json();
        setLocation(data.country);
      } catch (error) {
        console.log("could get the country");
      }
    };
    getLocation();
  }, []);
  return (
    <div>
      <span>Country location is {location}</span>
    </div>
  );
}

export default LocationPortal;