import React from "react";

function WelcomeListing({ nextStep }) {

  return (
    <div>

      <h1>Welcome to Saraey</h1>

      <p>
        Let's start adding your home.
      </p>

      <button onClick={nextStep}>
        Start Listing
      </button>

    </div>
  );

}

export default WelcomeListing;