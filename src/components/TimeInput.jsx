import React, { useContext } from "react";
import { ThemeContext } from "../store/Theme";

function TimeInput({ title, value, setValue }) {
  const [theme, themeDispatch] = useContext(ThemeContext);
  return (
    <>
      <h2 className=" text-white font-bold text-lg">{title}</h2>
      <div className=" flex gap-2 items-center">
        <input
          className=" text-white px-2 py-1 rounded-md text-right"
          style={{ backgroundColor: theme.bgColor }}
          value={value.minutes}
          onChange={(e) => setValue({ ...value, minutes: e.target.value })}
        />
        <span className=" text-white font-bold text-lg">:</span>
        <input
          className=" text-white px-2 py-1 rounded-md "
          style={{ backgroundColor: theme.bgColor }}
          value={value.seconds}
          onChange={(e) => setValue({ ...value, seconds: e.target.value })}
        />
      </div>
    </>
  );
}

export default TimeInput;
