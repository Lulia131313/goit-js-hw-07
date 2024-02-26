const form = document.querySelector(".login-form");
form.addEventListener("submit", onForm);
function onForm(e) {
  e.preventDefault();
  //   console.log(e.currentTarget.elements.email);
  //   console.log(e.currentTarget.elements.password);
  const { email, password } = e.currentTarget.elements;
  if (!email.value || !password.value)
    return alert("All form fields must be filled in");
  const userObj = {
    email: email.value.trim(),
    password: password.value.trim(),
  };
  console.log(userObj);
  e.currentTarget.reset();
}
