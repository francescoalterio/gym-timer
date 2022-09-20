import React, { useContext, useEffect } from "react";
import { useTimer } from "../hooks/useTimer";
import { PageContext } from "../store/Page";
import { ThemeContext } from "../store/Theme";
import ButtonPage from "./ButtonPage";
import Nav from "./Nav";
import PrincipalButton from "./PrincipalButton";

function Timer() {
  const [page, pageDispatch] = useContext(PageContext);
  const { minutes, seconds, isStarted, handleTimer } = useTimer();

  return (
    <div className=" w-[450px] h-80 bg-white bg-opacity-10 rounded-2xl flex justify-evenly items-center flex-col mt-5">
      <Nav isStarted={isStarted} />
      {page.page === "ONE_TIMER" ? (
        <ButtonPage content="Break" />
      ) : (
        <div className=" w-full flex justify-center gap-5">
          <ButtonPage
            content="Exercise"
            onClick={() =>
              !isStarted && pageDispatch({ type: "SET_TIMER_EXERCISE" })
            }
          />
          <ButtonPage
            content="Short Break"
            onClick={() =>
              !isStarted && pageDispatch({ type: "SET_TIMER_SHORT_BREAK" })
            }
          />
        </div>
      )}

      <span className=" text-7xl text-white font-bold">
        {minutes}:{seconds}
      </span>
      <PrincipalButton
        content={isStarted ? "Stop" : "Start"}
        onClick={handleTimer}
      />
    </div>
  );
}

export default Timer;
