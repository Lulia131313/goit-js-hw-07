function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const div = document.querySelector("#controls");
const input = div.firstElementChild;
const divBoxes = document.querySelector("#boxes");
const btCreate = div.querySelector("[data-create]");
const btDestroy = div.querySelector("[data-destroy]");

btCreate.addEventListener("click", onCreateClick);
btDestroy.addEventListener("click", onDestroyClick);

function onCreateClick() {
  const amount = input.value;
  destroyBoxes();
  if (amount < 1 || amount > 100) {
    return alert("Введіть число від 1 до 100");
  }
  createBoxes(amount);
  input.value = "";
}

function createBoxes(amount) {
  const divArray = [];

  for (let i = 0; i < amount; i++) {
    let div = document.createElement("div");

    div.style.width = 30 + 10 * i + "px";
    div.style.height = 30 + 10 * i + "px";
    div.style.backgroundColor = getRandomHexColor();
    divArray.push(div);
  }

  divBoxes.append(...divArray);
}
function onDestroyClick() {
  destroyBoxes();
}
function destroyBoxes() {
  divBoxes.innerHTML = "";
}
