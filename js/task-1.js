const liItemElements = document.querySelectorAll(".item");
console.log(`Number of categories : ${liItemElements.length}`);
liItemElements.forEach((el) =>
  console.log(
    `Category: ${el.firstElementChild.textContent} \n 
    Elements: ${el.lastElementChild.children.length}
`
  )
);
