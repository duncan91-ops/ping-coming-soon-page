const form = document.querySelector(".form");
const submitButton = document.querySelector(".form-btn");
const email = document.getElementById("email");
const errorMessage = document.querySelector(".error-msg");

email.addEventListener("focus", () => {
  form.elements.email.classList.remove("error");
  submitButton.disabled = false;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const value = form.elements.email.value;
  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    errorMessage.textContent = "Please provide a valid email address";
    form.elements.email.classList.add("error");
    submitButton.disabled = true;
  }
  if (value === "") {
    errorMessage.textContent =
      "Whoops! It looks like you forgot to add your email";
    form.elements.email.classList.add("error");
    submitButton.disabled = true;
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    window.alert("Success! We shall notify you on launch date.");
    form.elements.email.value = "";
  }
});
