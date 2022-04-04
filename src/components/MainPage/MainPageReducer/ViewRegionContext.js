import React, { createContext, useContext, useReducer } from "react";

// const ViewRegionContext = createContext({
//   viewRegion: null,
//   oldFasionImages: {},
// });
// export default ViewRegionContext;

export const ViewRegionContext = createContext();

export const ViewRegionProvider = ({ reducer, initialState, children }) => {
  return (
    <ViewRegionContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </ViewRegionContext.Provider>
  );
};

export const useViewRegion = () => useContext(ViewRegionContext);
