import "./EntryForm.css";
import Button from "../Button";
import React from "react";

export default function EntryForm(onAddEntry) {
  async function handleSubmit(event) {
    event.preventDefault();
    const response = await fetch(event);
    const data = await response.json();
    const newData(data) = { motto: "motto", notes: "notes" };
    onAddEntry(newData);
  }
  return (
    <form className="entry-form" onSubmit={handleSubmit}>
      <h2 className="entry-form__title">New Entry</h2>
      <div className="entry-form__fields">
        <div className="entry-form__field">
          <label htmlFor="motto">Motto</label>
          <input type="text" name="motto" id="motto" />
        </div>
        <div className="entry-form__field">
          <label htmlFor="notes">Notes</label>
          <textarea name="notes" id="notes" rows="4" />
        </div>
        <div className="entry-form__button-wrapper">
          <Button type="submit">Create</Button>
        </div>
      </div>
    </form>
  );
}
