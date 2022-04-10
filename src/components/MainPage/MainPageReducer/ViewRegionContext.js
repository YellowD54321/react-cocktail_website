import React, { createContext, useContext, useReducer } from "react";

export const ViewRegionContext = createContext();

export const ViewRegionProvider = ({ reducer, initialState, children }) => {
  return (
    <ViewRegionContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ViewRegionContext.Provider>
  );
};

export const useViewRegion = () => useContext(ViewRegionContext);
