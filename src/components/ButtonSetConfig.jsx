import React from "react";

function ButtonSetConfig({ showConfig, setShowConfig }) {
  return (
    <div className=" absolute bottom-5 bg-white bg-opacity-10 text-white font-bold px-4 pt-3 pb-3 rounded-md">
      <button onClick={() => setShowConfig(!showConfig)}>
        {showConfig ? "Close Config" : "Edit Times"}
      </button>
    </div>
  );
}

export default ButtonSetConfig;
