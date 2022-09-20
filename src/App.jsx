import { useContext, useEffect } from "react";
import Timer from "./components/Timer";
import { ThemeContext } from "./store/Theme";

function App() {
  const [theme, themeDispatch] = useContext(ThemeContext);

  return (
    <div
      className="w-full h-screen flex justify-center items-center transition-colors"
      style={{ backgroundColor: theme.bgColor }}
    >
      <Timer />
    </div>
  );
}

export default App;
