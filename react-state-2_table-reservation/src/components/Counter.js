import { useState } from "react";
import React from "react";
/* import function App from "../App.js" */

export default function Counter({ people, onIncrement, onDecrement }) {
  /* const [people, setPeople] = useState(0); */
  return (
    <>
      <h2>How many people would you like to visit us with?</h2>
      <div className="counter__buttons-container">
        <button
          type="button"
          className="counter__button"
          aria-label="increment people count"
          onClick={onIncrement}
        >
          +
        </button>
        <button
          type="button"
          className="counter__button"
          aria-label="decrement people count"
          onClick={onDecrement}
        >
          -
        </button>
      </div>
    </>
  );
}
