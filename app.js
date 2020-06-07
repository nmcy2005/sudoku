const grid = document.querySelector(".grid");
const gridItems = document.querySelectorAll(".gridItem");
const select = document.querySelector(".select");
const divs = document.querySelectorAll(".button");
let selectedNumber = 0;

function displayGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let item = document.createElement("div");
      item.innerHTML = `<div class="gridItem" onclick="displayNumber(this)"></div>`;
      grid.appendChild(item);
    }
  }
  gridItems.forEach((item) => {
    item.addEventListener("click", displayNumber(this));
  });
}

function handleOnClick(div, number) {
  selectedNumber = number;
  divs.forEach((div) => {
    div.classList.remove("selected");
  });
  div.classList.add("selected");
  console.log(selectedNumber);
}

function displayNumber(item) {
  if (selectedNumber === 0) {
    alert("Please choose a number!");
  } else {
    item.innerHTML = `<img width=50px height=50px src="images/${selectedNumber}.jpg"/>`;
  }
}

displayGrid();
