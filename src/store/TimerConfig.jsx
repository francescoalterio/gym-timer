import React, { useReducer } from "react";

export const TimerConfigContext = React.createContext();

function reducer(state, action) {
  switch (action.type) {
    case "SET_ALL_CONFIG":
      return { ...action.payload };
    case "SET_ONE_TIMER":
      return { BREAK: action.payload.BREAK, ...state };
    case "SET_TWO_TIMERS":
      return {
        EXERCISE: action.payload.EXERCISE,
        SHOR_BREAK: action.payload.SHOR_BREAK,
        ...state,
      };
    default:
      throw new Error();
  }
}

export default function TimerConfigWrapper({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    BREAK: {
      minutes: 1,
      seconds: 0,
    },
    EXERCISE: {
      minutes: 0,
      seconds: 45,
    },
    SHORT_BREAK: {
      minutes: 0,
      seconds: 15,
    },
  });

  return (
    <TimerConfigContext.Provider value={[state, dispatch]}>
      {children}
    </TimerConfigContext.Provider>
  );
}
