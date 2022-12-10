const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const target = event.currentTarget;
  const formData = {
    email: target.email.value,
    password: target.password.value,
  };

  formData.email && formData.password
    ? console.log(formData)
    : alert("Усі поля мають бути заповненми!");
  target.reset();
});
