import React from "react";
import "./styles.css";

export default function App() {
  return (
    <main>
      <Button>First</Button>
      <Button>2nd</Button>
      <Button>3rd</Button>
      <Button>Last</Button>
    </main>
  );
}

function Button({ children }) {
  return (
    <button className="button" type="button">
      {children}
    </button>
  );
}
