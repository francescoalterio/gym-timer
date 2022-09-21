import React, { useContext, useEffect, useState } from "react";
import { TimerConfigContext } from "../store/TimerConfig";

export function useInitializeApp() {
  const [stateTimerConfig, dispatchTimerConfig] =
    useContext(TimerConfigContext);

  const [isInitialize, setIsInitialize] = useState(false);

  useEffect(() => {
    const timerConfig = localStorage.getItem("timerConfig");

    if (timerConfig) {
      dispatchTimerConfig({
        type: "SET_ALL_CONFIG",
        payload: JSON.parse(timerConfig),
      });
      setIsInitialize(true);
    } else {
      const config = {
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
      };
      localStorage.setItem("timerConfig", JSON.stringify(config));
      setIsInitialize(true);
    }
  }, []);

  useEffect(() => {
    if (isInitialize)
      localStorage.setItem("timerConfig", JSON.stringify(stateTimerConfig));
  }, [stateTimerConfig]);
}
