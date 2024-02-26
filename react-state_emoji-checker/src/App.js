import React from "react";
import { useState } from "react";
import "./styles.css";

export default function App() {
  const [code, setCode] = useState("");

  const validCode = "🐡🐠🐋";

  const handleClick = (event) => {
    const emoji = event.target.textContent;
    setCode((prevCode) => prevCode + emoji);
  };

  const handleResetClick = () => {
    setCode("");
  };

  return (
    <div className="container">
      <div className="button-container">
        <button
          type="button"
          onClick={handleClick} /* {() => {
            console.log("Update Code!");
          }} */
        >
          <span role="img" aria-label="Pufferfish">
            🐡
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick} /* {() => {
            console.log("Update Code!");
          }} */
        >
          <span role="img" aria-label="Whale">
            🐋
          </span>
        </button>
        <button
          type="button"
          onClick={handleClick} /* {() => {
            console.log("Update Code!");
          }} */
        >
          <span role="img" aria-label="Clownfish">
            🐠
          </span>
        </button>{" "}
      </div>

      <button
        type="button"
        onClick={handleResetClick} /* {() => {
          console.log("Reset Code!");
        }} */
      >
        Reset
      </button>

      {code === validCode && <p>Valid code!</p>}
    </div>
  );
}
