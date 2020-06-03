//Make something happen when clicked
var t = document.getElementsByTagName("td");

function restartGame() {
  //document.getElementsById("wholetable").style.backgroundColor="red";
  for (var i = 0; i < t.length; i++) {
    t[i].style.backgroundColor="turquoise";
  }
}
