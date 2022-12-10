const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", ({ currentTarget }) => {

  currentTarget.value.length >= Number(validationInput.dataset.length)
    ? validationInput.classList.add("valid")
    : validationInput.classList.add("invalid");
});

validationInput.addEventListener("focus", () => {
  validationInput.classList.remove("valid");
  validationInput.classList.remove("invalid");
});