const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;

  if (email.value && password.value) {
    console.log({ email: email.value, password: password.value });
    event.currentTarget.reset();
  } else {
    alert("Усі поля мають бути заповненими!");
  }
});
