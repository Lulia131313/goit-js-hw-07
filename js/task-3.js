const refs = {
  input: document.querySelector("#name-input"),
  span: document.querySelector("#name-output"),
};

refs.input.addEventListener("input", (e) => {
  const input = e.target;
  !input.value.trim()
    ? (refs.span.textContent = "Anonymous")
    : (refs.span.textContent = input.value);
});
