var cells = document.getElementById("wholetable").getElementsByTagName("td");
var score = document.getElementById("board").getElementsByTagName("td");
var purpleLeft = 0;
var numError = 0;
var hintUsed = 0;
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

function countError() {
  for (var l = 0; l < cells.length; l++) {
    if (cells[l].style.backgroundColor === "white") {
      numError++;
    }
  }
}

function calculate() {
  var name = window.prompt("Enter you name: ");
  if (score[1].innerHTML === "NONE") {
    score[1].innerHTML=name;
    score[2].innerHTML=numError;
  } else if (score[2].innerHTML - numError >= 0) {
    alert("CONGRATULATION " + name + ", you beat the world record! :)");
    score[1].innerHTML=name;
    score[2].innerHTML=numError;
  } else {
    alert("Nice try " + name + ", you have not beaten world record :(");
  }
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
    if (hintUsed == 1) {
      alert("You finished, but used a hint! No world record for you!")
    } else {
      countError();
      calculate();
    }
    giveSolution();
    numError = 0;
    hintUsed = 0;
  }
}

function hint() {
  hintUsed = 1;
  var hintCell = Math.floor(Math.random() * 256);
  if (cells[hintCell].style.backgroundColor === "turquoise") {
    cells[hintCell].click();
  } else {
    hintCell = Math.floor(Math.random() * 256);
    hint();
  }
}
