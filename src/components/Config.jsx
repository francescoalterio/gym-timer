import React, { useContext, useState, useEffect } from "react";
import { useTimerConfig } from "../hooks/useTimerConfig";
import { PageContext } from "../store/Page";
import { ThemeContext } from "../store/Theme";
import TimeInput from "./TimeInput";

function Config({ setShowConfig }) {
  const [page, pageDispatch] = useContext(PageContext);
  const [theme, themeDispatch] = useContext(ThemeContext);

  const {
    breakInput,
    exerciseInput,
    shortBreakInput,
    setBreakInput,
    setExerciseInput,
    setShortBreakInput,
    handleSave,
  } = useTimerConfig();

  return (
    <div className=" w-[450px] h-80 bg-white bg-opacity-10 rounded-2xl flex justify-evenly items-center flex-col mt-5">
      {page.page === "ONE_TIMER" ? (
        <TimeInput title="BREAK" value={breakInput} setValue={setBreakInput} />
      ) : (
        <>
          <TimeInput
            title="EXERCISE"
            value={exerciseInput}
            setValue={setExerciseInput}
          />
          <TimeInput
            title="SHORT BREAK"
            value={shortBreakInput}
            setValue={setShortBreakInput}
          />
        </>
      )}
      <button
        className=" bg-white px-5 py-2 font-bold rounded-md"
        style={{ color: theme.bgColor }}
        onClick={() => handleSave(setShowConfig)}
      >
        Save
      </button>
    </div>
  );
}

export default Config;
