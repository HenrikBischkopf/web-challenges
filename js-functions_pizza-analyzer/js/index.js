console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = pizzaGain + "%";
  updatePizzaDisplay(pizza1, pizzaSize1);
});

pizzaInput2.addEventListener("input", () => {
  const pizzaSize1 = parseFloat(pizzaInput1.value);
  const pizzaSize2 = parseFloat(pizzaInput2.value);
  const pizzaGain = calculatePizzaGain(pizzaSize1, pizzaSize2);
  output.textContent = pizzaGain + "%";
  updatePizzaDisplay(pizza2, pizzaSize2);
});

// Task 1
// define the function calculatePizzaGain here
function calculatePizzaGain(pizzaInput1, pizzaInput2) {
  const area1 = Math.PI * Math.pow(pizzaInput1 / 2, 2);
  const area2 = Math.PI * Math.pow(pizzaInput2 / 2, 2);
  const pizzaGain = ((area2 - area1) / area1) * 100;
  return Math.round(pizzaGain);
}

// Task 2
// define the function updatePizzaDisplay here
function updatePizzaDisplay(pizzaElement, newSize) {
  const newDisplaySize = (newSize / 24) * 100;
  pizzaElement.style.width = newDisplaySize + "px";
}

// Task 3
// define the function updateOutputColor here
