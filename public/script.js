var cells = document.getElementsByTagName("td");
var purpleLeft = 0;
restartGame();

function restartGame() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].style.backgroundColor="turquoise";
  }
}

function giveSolution() {
  for (var j = 0; j < cells.length; j++) {
    cells[j].click();
  }
  alertMsg();
}

function alertMsg() {
  alert("CONGRATULATION, You have Won!");
}

function finished() {
  for (var k = 0; k < cells.length; k++) {
    if (cells[k].style.backgroundColor === "turquoise") {
      cells[k].click();
      if (cells[k].style.backgroundColor !== "white") {
        purpleLeft = 1;
      }
      cells[k].style.backgroundColor="turquoise";
    }
  }

  if (purpleLeft) {
    alert("FAIL, You have not finished yet!");
    purpleLeft = 0;
  } else {
    giveSolution();
  }
}
