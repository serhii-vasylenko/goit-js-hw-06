let counterValue = 0;

const refs = document.querySelector("#counter");

const decrementBtn = refs.querySelector('[data-action="decrement"]');
const incrementBtn = refs.querySelector('[data-action="increment"]');

const valueField = refs.querySelector("#value");

decrementBtn.addEventListener("click", () => {
  counterValue -= 1;
  valueField.textContent = counterValue;
});

incrementBtn.addEventListener("click", () => {
    counterValue += 1;
    valueField.textContent = counterValue;
  });