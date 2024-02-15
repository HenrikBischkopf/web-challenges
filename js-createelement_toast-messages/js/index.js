console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
  const toastList = document.createElement("li");
  /* toastList.classList.add.toast - Container; */
  toastList.textContent = "another entry";
  toastContainer.appendChild(toastList);
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  const toastContainer = document.querySelector('[data-js="toast-container"]');
  toastContainer.innerHTML = "";
});
