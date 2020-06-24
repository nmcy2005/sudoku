// Getting the grid, the single squares, the select panel and the single divs inside the select panel

const grid = document.querySelector(".grid");
const gridItems = document.querySelectorAll(".gridItem");
const select = document.querySelector(".select");
const divs = document.querySelectorAll(".button");

let items = [];
for (let i = 0; i < 9; i++) {
  items.push([
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
  ]);
}

//declaring the state of the selected number
let selectedNumber = 0;

//creates 9x9 divs with class="gridItem" and an onclick function (displayNumber), passing itself to that function
function displayGrid() {
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      let item = document.createElement("div");
      let id = `${i}${j}`;
      item.innerHTML = `<div id=${id} class="gridItem" onclick="displayNumber(this)"></div>`;
      items[i][j] = item;
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
    if (selectedNumber === 10) {
      item.innerHTML = "";
    } else {
      item.innerHTML = `<img width=50px height=50px class="img${selectedNumber}" src="images/${selectedNumber}.jpg"/>`;
      if (check(item, selectedNumber)) {
        item.innerHTML = `<img width=50px height=50px class="img${selectedNumber}" src="images/${selectedNumber}.jpg"/>`;
      } else {
        item.innerHTML = "";
        alert(
          "That number is not allowed to go in there! Please choose another one!"
        );
      }
    }
  }
}

function check(item) {
  let a = checkRow(item);
  let b = checkCol(item);
  let c = checkSquare(item);

  if (a === true && b === true && c === true) {
    return true;
  } else {
    return false;
  }
}

function checkRow(item) {
  pos = item.id.split("");

  let itemImage = document
    .getElementById(item.id)
    .getElementsByTagName("img")[0].src;
  let imageURL = itemImage.substr(itemImage.length - 5);
  let itemNumber = imageURL.substr(0, 1);
  targets = [];

  for (let i = 0; i < 9; i++) {
    if (i === parseInt(pos[1])) {
      continue;
    } else {
      target = items[pos[0]][i]
        .getElementsByTagName("div")[0]
        .getElementsByTagName("img")[0];

      if (target !== undefined) {
        let img = target.src.substr(target.src.length - 5);
        let number = img.substr(0, 1);
        targets.push(number);
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    if (itemNumber === targets[i]) {
      return false;
    }
  }
  return true;
}

function checkCol(item) {
  pos = item.id.split("");

  let itemImage = document
    .getElementById(item.id)
    .getElementsByTagName("img")[0].src;
  let imageURL = itemImage.substr(itemImage.length - 5);
  let itemNumber = imageURL.substr(0, 1);
  targets = [];

  for (let i = 0; i < 9; i++) {
    if (i === parseInt(pos[0])) {
      continue;
    } else {
      target = items[i][pos[1]]
        .getElementsByTagName("div")[0]
        .getElementsByTagName("img")[0];

      if (target !== undefined) {
        let img = target.src.substr(target.src.length - 5);
        let number = img.substr(0, 1);
        targets.push(number);
      }
    }
  }

  for (let i = 0; i < targets.length; i++) {
    if (itemNumber === targets[i]) {
      return false;
    }
  }
  return true;
}

function checkSquare(item, selectedNumber) {
  pos = item.id.split("");

  let itemImage = document
    .getElementById(item.id)
    .getElementsByTagName("img")[0].src;
  let imageURL = itemImage.substr(itemImage.length - 5);
  let itemNumber = imageURL.substr(0, 1);
  targets = [];

  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {}
  }

  square = getSquare(pos[0], pos[1]);
  console.log(square);

  for (let i = 0; i < targets.length; i++) {
    if (itemNumber === targets[i]) {
      return false;
    }
  }

  return true;
}

function getSquare(y, x) {
  let coords = [];

  for (let j = 0; j < 9; j += 3) {
    for (let i = 0; i < 9; i += 3) {
      s = [];
      s.push(
        [i, j],
        [i, j + 1],
        [i, j + 2],
        [i + 1, j],
        [i + 1, j + 1],
        [i + 1, j + 2],
        [i + 2, j],
        [i + 2, j + 1],
        [i + 2, j + 2]
      );
      coords.push(s);
    }
  }

  console.log(x, y);
  console.log(coords);
  console.log(coords[3][1]);

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      console.log(coords[i][j]);
      console.log(coords[3][1][0] === x);
      /// HERE FIX THE CONDITIONAL
      if (y === coords[i][j][0] && x === coords[i][j][1]) {
        alert("hit");
        return coords[i];
      }
    }
  }
}

function getNumber(x, y) {
  let itemNumber;
  let coords = String(x) + String(y);
  let itemImage = document
    .getElementById(coords)
    .getElementsByTagName("img")[0];
  if (itemImage !== undefined) {
    itemNumber = itemImage.src.substr(itemImage.src.length - 5);
    itemNumber = itemNumber.substr(0, 1);
  }
  return itemNumber;
}

displayGrid();
