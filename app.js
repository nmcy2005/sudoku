// Getting the grid, the single squares, the select panel and the single divs inside the select panel

const grid = document.querySelector(".grid");
const gridItems = document.querySelectorAll(".gridItem");
const select = document.querySelector(".select");
const divs = document.querySelectorAll(".button");

//declaring the state of the selected number
let selectedNumber = 0;

//creates 9x9 divs with class="gridItem" and an onclick function (displayNumber), passing itself to that function
function displayGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let item = document.createElement("div");
      item.innerHTML = `<div class="gridItem" onclick="displayNumber(this)"></div>`;
      grid.appendChild(item);
    }
  }
}

// handling the click on the select panel
function handleOnClick(div, number) {
  selectedNumber = number;

  //first remove the class  "selected" (-> disable the blue color) of every item
  divs.forEach((div) => {
    div.classList.remove("selected");
  });
  //then add the class "selected" to the clicked item
  div.classList.add("selected");
}

//if there  is no number selected, alert an error message, else
//set the inner HTMl of that item to an img with some styles(width, heigth) and a path
//Note: If you want to add more pictures, you have to name them "NUMBER.jpg", replacing the NUMBER with the number shown in the picture
// else it won't work
function displayNumber(item) {
  if (selectedNumber === 0) {
    alert("Please choose a number!");
  } else {
    item.innerHTML = `<img width=50px height=50px src="images/${selectedNumber}.jpg"/>`;
  }
}

displayGrid();
