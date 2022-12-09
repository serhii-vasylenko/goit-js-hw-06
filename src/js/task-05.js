const nameInput = document.querySelector("#name-input");
let nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", ({currentTarget}) => {
  currentTarget.value
    ? (nameOutput.textContent = currentTarget.value)
    : (nameOutput.textContent = "Anonimus");
});