import Card from "./components/Card";
import "./components/Card.css";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banana",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍌 Apple",
      color: "green",
    },
    {
      id: 1339,
      name: "🍌 Strawberry",
      color: "red",
    },
    {
      id: 1340,
      name: "🍌 Kiwi",
      color: "green",
    },
    {
      id: 1341,
      name: "🍌 Honeymelon",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {/* <Card {fruits.map(({id, name, color}) =><li key={id}>{name, color}</li> )} /> */}
      {fruits.map(({ id, name, color }) => (
        <Card key={id} name={name} color={color} className={`card--${color}`} />
      ))}
    </div>
  );
}
