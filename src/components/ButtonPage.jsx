import React, { useContext } from "react";
import { PageContext } from "../store/Page";
import { ThemeContext } from "../store/Theme";

function ButtonPage({ content, onClick }) {
  const [theme, themeDispatch] = useContext(ThemeContext);
  const [page, pageDispath] = useContext(PageContext);

  const isPage =
    content.toLowerCase().split(" ").join("_") === page.timer.toLowerCase();
  return (
    <button
      className=" px-5 py-1 bg-none border-none text-white rounded-md text-base font-medium cursor-pointer"
      style={{ backgroundColor: isPage && theme.bgColor }}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export default ButtonPage;
