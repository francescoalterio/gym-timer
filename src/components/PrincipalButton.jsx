import React, { useContext } from "react";
import { ThemeContext } from "../store/Theme";

function PrincipalButton({ content, onClick }) {
  const [theme, dispatch] = useContext(ThemeContext);
  return (
    <button
      style={{
        color: theme.bgColor,
        boxShadow:
          content === "Stop" ? "none" : "rgb(209, 209, 209) 0px 6px 0px",
        transform: content === "Stop" ? "translateY(6px)" : undefined,
      }}
      className=" w-48 h-20 cursor-pointer border-none rounded-md text-3xl font-bold bg-slate-100 transition-colors"
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default PrincipalButton;
