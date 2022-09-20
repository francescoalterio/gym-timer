import React, { useReducer } from "react";

export const PageContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET_PAGE_ONE_TIMER":
      return { page: "ONE_TIMER", timer: "BREAK" };
    case "SET_PAGE_TWO_TIMERS":
      return { page: "TWO_TIMERS", timer: "EXERCISE" };
    case "SET_TIMER_EXERCISE":
      return { page: "TWO_TIMERS", timer: "EXERCISE" };
    case "SET_TIMER_SHORT_BREAK":
      return { page: "TWO_TIMERS", timer: "SHORT_BREAK" };
    default:
      throw new Error();
  }
}

export default function PageWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    page: "ONE_TIMER",
    timer: "BREAK",
  });

  return (
    <PageContext.Provider value={[state, dispatch]}>
      {children}
    </PageContext.Provider>
  );
}
