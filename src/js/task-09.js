function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = document.querySelector(".widget");
const colorField = refs.querySelector(".color");
const changeColorBtn = refs.querySelector(".change-color");


changeColorBtn.addEventListener("click", () => {
  const randomColor = getRandomHexColor();
  colorField.textContent = randomColor;
  document.body.style.backgroundColor = `${randomColor}`;
});