console.clear();

const form = document.querySelector('[data-js="form"]');

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formElements = event.target.elements;
  const data = Object.fromEntries(formElements);

  console.log(data);

  event.target.reset();
  event.target.elements.firstName.focus();
});
