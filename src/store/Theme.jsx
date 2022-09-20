import React, { useReducer } from "react";

export const bgColors = {
  FIRST: "#4c9195",
  SECONDARY: "#51943d",
  ALTERNATIVE: "#8c4c95",
};

export const ThemeContext = React.createContext(bgColors.SECOND);

function reducer(state, action) {
  switch (action.type) {
    case "FIRST":
      return { bgColor: bgColors.FIRST };
    case "SECONDARY":
      return { bgColor: bgColors.SECONDARY };
    case "ALTERNATIVE":
      return { bgColor: bgColors.ALTERNATIVE };
    default:
      throw new Error();
  }
}

export default function ThemeWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    bgColor: bgColors.FIRST,
  });

  return (
    <ThemeContext.Provider value={[state, dispatch]}>
      {children}
    </ThemeContext.Provider>
  );
}
