import React, { useContext } from "react";
import { PageContext } from "../store/Page";
import { ThemeContext } from "../store/Theme";

function Nav({ isStarted }) {
  const [page, dispatch] = useContext(PageContext);
  const [theme] = useContext(ThemeContext);
  return (
    <nav className=" absolute top-5 bg-white bg-opacity-10 text-white font-bold px-4 pt-3 pb-3 rounded-full flex gap-5">
      <button
        className=" px-5 py-2 rounded-full"
        style={{ backgroundColor: page.page === "ONE_TIMER" && theme.bgColor }}
        onClick={() => !isStarted && dispatch({ type: "SET_PAGE_ONE_TIMER" })}
      >
        One Timer
      </button>
      <button
        className=" px-5 py-2 rounded-full"
        style={{ backgroundColor: page.page === "TWO_TIMERS" && theme.bgColor }}
        onClick={() => !isStarted && dispatch({ type: "SET_PAGE_TWO_TIMERS" })}
      >
        Two Timers
      </button>
    </nav>
  );
}

export default Nav;
