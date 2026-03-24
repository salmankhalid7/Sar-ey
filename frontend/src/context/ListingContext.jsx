import React, { createContext, useReducer, useContext } from "react";

// Initial state
const initialState = {
  step: 1,
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
  availability: []
};

// Reducer
function listingReducer(state, action) {
  switch (action.type) {
    case "SET_FIELD":
      return { ...state, [action.field]: action.value };
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
}

// Context
const ListingContext = createContext();

// Provider
export const ListingProvider = ({ children }) => {
  const [state, dispatch] = useReducer(listingReducer, initialState);

  const setField = (field, value) => dispatch({ type: "SET_FIELD", field, value });
  const nextStep = () => dispatch({ type: "NEXT_STEP" });
  const prevStep = () => dispatch({ type: "PREV_STEP" });
  const resetListing = () => dispatch({ type: "RESET" });

  return (
    <ListingContext.Provider value={{ state, setField, nextStep, prevStep, resetListing }}>
      {children}
    </ListingContext.Provider>
  );
};

// Custom hook
export const useListing = () => useContext(ListingContext);