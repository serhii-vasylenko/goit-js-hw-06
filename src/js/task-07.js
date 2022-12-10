const fontSizeControl = document.querySelector("#font-size-control");
const textField = document.querySelector("#text");
textField.style.fontSize = `${fontSizeControl.value}px`;

fontSizeControl.addEventListener("input", ({ currentTarget }) => {
  textField.style.fontSize = `${currentTarget.value}px`;
});