import React, { useState } from "react";

export function replaceCamelCaseWithSpaces(coloreName) {
  return coloreName.replace(/\B([A-Z])\B/g, " $1");
}

function App() {
  const [buttonColor, setButtonColor] = useState("red");
  const [isChecked, setIsChecked] = useState(false);

  const toggleButtonColor = () => {
    setButtonColor((prevColor) => (prevColor === "red" ? "blue" : "red"));
  };

  return (
    <div>
      <button
        style={{ backgroundColor: buttonColor }}
        disabled={isChecked}
        onClick={toggleButtonColor}
      >
        change to {buttonColor === "red" ? "blue" : "red"}
      </button>
      <input
        type="checkbox"
        onChange={(e) => setIsChecked(e.target.checked)}
        checked={isChecked}
        aria-checked={isChecked}
      />
    </div>
  );
}

export default App;
