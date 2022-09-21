import React, { useContext, useEffect, useState } from "react";
import { TimerConfigContext } from "../store/TimerConfig";

const initialValues = {
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

export function useTimerConfig() {
  const [timerConfig, timerConfigDispatch] = useContext(TimerConfigContext);

  const [breakInput, setBreakInput] = useState(initialValues.BREAK);
  const [exerciseInput, setExerciseInput] = useState(initialValues.EXERCISE);
  const [shortBreakInput, setShortBreakInput] = useState(
    initialValues.SHORT_BREAK
  );

  useEffect(() => {
    setBreakInput(timerConfig.BREAK);
    setExerciseInput(timerConfig.EXERCISE);
    setShortBreakInput(timerConfig.SHORT_BREAK);
  }, [timerConfig]);

  function handleSave(setShowConfig) {
    if (
      !isNaN(breakInput.minutes) &&
      !isNaN(breakInput.seconds) &&
      !isNaN(exerciseInput.minutes) &&
      !isNaN(exerciseInput.seconds) &&
      !isNaN(shortBreakInput.minutes) &&
      !isNaN(shortBreakInput.seconds)
    ) {
      if (
        breakInput.minutes <= 59 &&
        breakInput.seconds <= 59 &&
        exerciseInput.minutes <= 59 &&
        exerciseInput.seconds <= 59 &&
        shortBreakInput.minutes <= 59 &&
        shortBreakInput.seconds <= 59
      ) {
        timerConfigDispatch({
          type: "SET_ALL_CONFIG",
          payload: {
            BREAK: breakInput,
            EXERCISE: exerciseInput,
            SHORT_BREAK: shortBreakInput,
          },
        });
        setShowConfig(false);
      }
    }
  }

  return {
    breakInput,
    exerciseInput,
    shortBreakInput,
    setBreakInput,
    setExerciseInput,
    setShortBreakInput,
    handleSave,
  };
}
