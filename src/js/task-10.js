function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");

createBtn.addEventListener("click", () => {
  const countBoxesInput = controls.querySelector("input");
  createBoxes(countBoxesInput.value);
  countBoxesInput.value = "";
});

destroyBtn.addEventListener("click", () => {
  const boxes = document.querySelector("#boxes").children;
  [...boxes].forEach((box) => box.remove());
});

function createBoxes(amount) {
  let width = 30;
  let height = 30;
  const divParrent = document.querySelector("#boxes");
  for (let i = 1; i <= amount; i += 1) {
    divParrent.append(createBox("div", width, height));
    width += 10;
    height += 10;
  }
}

function createBox(selector, width, height) {
  const childDiv = document.createElement(selector);
  childDiv.style.backgroundColor = `${getRandomHexColor()}`;
  childDiv.style.width = `${width}px`;
  childDiv.style.height = `${height}px`;
  return childDiv;
}
