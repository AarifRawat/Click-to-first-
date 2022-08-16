var b1 = 0;
var b2 = 0;
function score1() {
  if (b1 < 10 && b2 != 10) {
    b1 = b1 + 1;
  }
  document.getElementById('b1').innerHTML = b1;
}
function score2() {
  if (b2 < 10 && b1 != 10) {
    b2 = b2 + 1;
  }
  document.getElementById('b2').innerHTML = b2;
}
