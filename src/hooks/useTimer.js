import React, { useState, useEffect, useContext } from "react";
import { timeFormated } from "../services/timeFormated";
import { PageContext } from "../store/Page";
import { ThemeContext } from "../store/Theme";
import { TimerConfigContext } from "../store/TimerConfig";

export function useTimer() {
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [isStarted, setIsStarted] = useState(false);

  const [page, pageDispatch] = useContext(PageContext);
  const [theme, themeDispatch] = useContext(ThemeContext);
  const [timerConfig, timerConfigDispatch] = useContext(TimerConfigContext);

  const minutesFormatted = timeFormated(minutes);
  const secondsFormatted = timeFormated(seconds);

  const buttonPressSound = new Audio("/sounds/buttonpress.mp3");
  const finishTimer = new Audio("/sounds/finish.mp3");

  function setTimer(newMinutes, newSeconds, start) {
    setMinutes(newMinutes);
    setSeconds(newSeconds);
    if (start) isStarted(true);
  }

  function setTimerByPage() {
    if (page.timer === "BREAK") {
      setTimer(1, 0);
    } else if (page.timer === "EXERCISE") {
      setTimer(0, 45);
    } else if (page.timer === "SHORT_BREAK") {
      setTimer(0, 15);
    }
  }

  function handleTimer() {
    buttonPressSound.play();
    setIsStarted(!isStarted);
  }

  useEffect(setTimerByPage, [page]);

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        if (minutes === 0 && seconds === 0) {
          if (page.timer === "EXERCISE") {
            pageDispatch({ type: "SET_TIMER_SHORT_BREAK" });
            finishTimer.play();
          } else if (page.timer === "SHORT_BREAK") {
            pageDispatch({ type: "SET_TIMER_EXERCISE" });
            finishTimer.play();
          } else {
            handleTimer();
            setTimerByPage();
            finishTimer.play();
          }
        } else if (seconds === 0) {
          setSeconds(59);
          setMinutes(minutes - 1);
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    }
  }, [isStarted, minutes, seconds]);

  useEffect(() => {
    if (page.timer === "BREAK") {
      themeDispatch({ type: "FIRST" });
      setMinutes(timerConfig.BREAK.minutes);
      setSeconds(timerConfig.BREAK.seconds);
    } else if (page.timer === "EXERCISE") {
      themeDispatch({ type: "SECONDARY" });
      setMinutes(timerConfig.EXERCISE.minutes);
      setSeconds(timerConfig.EXERCISE.seconds);
    } else if (page.timer === "SHORT_BREAK") {
      themeDispatch({ type: "ALTERNATIVE" });
      setMinutes(timerConfig.SHORT_BREAK.minutes);
      setSeconds(timerConfig.SHORT_BREAK.seconds);
    }
  }, [page, timerConfig]);

  return {
    minutes: minutesFormatted,
    seconds: secondsFormatted,
    isStarted,
    handleTimer,
    setTimer,
  };
}
