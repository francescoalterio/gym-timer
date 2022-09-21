import { useContext, useState } from "react";
import ButtonSetConfig from "./components/ButtonSetConfig";
import Config from "./components/Config";
import Timer from "./components/Timer";
import { useInitializeApp } from "./hooks/useInitializeApp";
import { ThemeContext } from "./store/Theme";

function App() {
  const [theme, themeDispatch] = useContext(ThemeContext);
  useInitializeApp();
  const [showConfig, setShowConfig] = useState(false);

  return (
    <div
      className="w-full h-screen flex justify-center items-center transition-colors"
      style={{ backgroundColor: theme.bgColor }}
    >
      {showConfig ? <Config setShowConfig={setShowConfig} /> : <Timer />}
      <ButtonSetConfig showConfig={showConfig} setShowConfig={setShowConfig} />
    </div>
  );
}

export default App;
