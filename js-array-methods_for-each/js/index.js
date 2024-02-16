const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach((color) => {
  const colorElement = document.createElement("div");
  colorElement.classList.add("color-box");
  colorElement.style.backgroundColor = color;
  document.body.append(colorElement);
});

function renderColorBox(color) {
  const colorElement = document.createElement("div");
  colorElement.classList.add("color-box");
  colorElement.style.backgroundColor = color;
  document.body.append(colorElement);
}

colors.forEach((color) => {
  renderColorBox(color);
});
/* const pets = ["bird", "cat", "dog", "ferret", "fish"];
pets.forEach((pet) => {
  const petElement = document.createElement("p");
  petElement.textContent = pet;
  document.body.append(petElement);
}); */

/* Add class to element 
element.classList.add("mystyle"); */

/* Set background color to object:
object.style.backgroundColor = */
