 let p = "o";
let game = true;
let w = document.getElementById("winner");

function handleCellClick(id) {
  let cell = document.getElementById(id);

  if (!game || cell.innerHTML !== "") return;

  cell.innerHTML = p;
  checkWin();

  if (game) {
    p = p === "o" ? "x" : "o";
  }
}

function checkWin() {
  const c = [];
  for (let i = 1; i <= 9; i++) {
    c[i] = document.getElementById("cell" + i).innerHTML;
  }

  if (
    (c[1] === p && c[2] === p && c[3] === p) ||
    (c[4] === p && c[5] === p && c[6] === p) ||  
    (c[7] === p && c[8] === p && c[9] === p) ||
    (c[1] === p && c[4] === p && c[7] === p) ||
    (c[2] === p && c[5] === p && c[8] === p) ||
    (c[3] === p && c[6] === p && c[9] === p) ||
    (c[1] === p && c[5] === p && c[9] === p) ||
    (c[3] === p && c[5] === p && c[7] === p)
  ) {
    w.innerHTML = p.toUpperCase() + " is the winner!";
    game = false;
    return;
  }

  // Check for draw
  let draw = true;
  for (let i = 1; i <= 9; i++) {
    if (document.getElementById("cell" + i).innerHTML === "") {
      draw = false;
      break;
    }
  }

  if (draw) {
    w.innerHTML = "It's a draw!";
    game = false;
  }
}

function restart() {
  p = "o";
  game = true;
  w.innerHTML = "";
  for (let i = 1; i <= 9; i++) {
    document.getElementById("cell" + i).innerHTML = "";
  }
}
