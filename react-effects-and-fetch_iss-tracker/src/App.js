import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    async function getISSCoords() {
      const response = await fetch(URL);
      const data = await response.json();

      setCoords(data);
    }

    getISSCoords();
  }, []);

  /*  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        `https://example-apis.vercel.app/api/bad-jokes/${count}`
      );
      const data = await response.json();

      setData(data);
    }

    fetchData();
  }, [count]);

  if (!data) {
    return <p>loading..</p>;
  }
 */

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        /* onRefresh={getISSCoords} */
      />
    </main>
  );
}
