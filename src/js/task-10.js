function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const controls = document.querySelector("#controls");
const createBtn = controls.querySelector("[data-create]");
const destroyBtn = controls.querySelector("[data-destroy]");
const countBoxesInput = controls.querySelector("input");
const divParrent = document.querySelector("#boxes");

const width = 30;
const height = 30;
countBoxesInput.value = "0";

createBtn.addEventListener("click", () => {
  boxes.innerHTML = "";  
  createBoxes(countBoxesInput.value);
});

destroyBtn.addEventListener("click", () => {
  // const boxes = document.querySelector("#boxes").children;
  // [...boxes].forEach((box) => box.remove());
  boxes.innerHTML = "";
  countBoxesInput.value = "0";
});

function createBoxes(amount) {  
  for (let i = 1; i <= amount; i += 1) {
    const childDiv = document.createElement('div');
    childDiv.style.backgroundColor = `${getRandomHexColor()}`;
    childDiv.style.width = `${width + 10 * i}px`;
    childDiv.style.height = `${height + 10 * i}px`;
    divParrent.append(childDiv);
  }
}
