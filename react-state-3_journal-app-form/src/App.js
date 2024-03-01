import "./App.css";
import EntriesSection from "./components/EntriesSection";
import EntryForm from "./components/EntryForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useState } from "react";
import { initialEntries } from "./components/EntriesSection";
import { uid } from "uid";

function App() {
  function handleAddEntry(newEntry) {
    const id = uid();
    const date = new Date().toLocaleDateString("en-us", {
      dateStyle: "medium",
    });
    const entryWithIdAndDate = { ...newEntry, date, id };
    setEntries([entryWithIdAndDate, ...entries]);
  }

  const [entries, setEntries] = useState(initialEntries);

  return (
    <div className="app">
      <Header />
      <main className="app__main">
        <EntryForm onAddEntry={handleAddEntry} />
        <EntriesSection entries={entries} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
