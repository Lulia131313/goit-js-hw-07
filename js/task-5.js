function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const refs = document.querySelector(".change-color");
const colorSpan = document.querySelector(".color");

refs.addEventListener("click", onBtnClick);
function onBtnClick(e) {
  const randomColor = getRandomHexColor();
  document.body.style.background = randomColor;
  colorSpan.textContent = randomColor;
}
