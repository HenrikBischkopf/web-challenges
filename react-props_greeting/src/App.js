import "./styles.css";

export default function App() {
  return (
    <>
      <Greeting name="Henrik" />
      <Greeting name="Dominik" />
    </>
  );
}

function Greeting({ name }) {
  {
    return name === "Dominik" ? <h1>Hello, Coach!</h1> : <h1>Hello {name}</h1>;
  }
}

/* function UserCard({ name, isFavorite }) {
  return (
    <div>
      {name}
      {isFavorite ? <span>🌟</span> : null}
    </div>
  );
} */
