const root = document.querySelector("#root");

const gameMatrix = createTable();

let winner = "";
let p1 = "Player 1";
let p2 = "Player 2";
let moveNum = 0;

console.log(gameMatrix);

function createTable() {
  return new Array(3).fill(Array(3).fill(null)).map((arr) =>
    arr.map(() => {
      const gameDiv = document.createElement("div");
      gameDiv.innerText = "";
      gameDiv.className = "game-div";
      gameDiv.addEventListener("click", handleGameDivClick);
      root.appendChild(gameDiv);
      return gameDiv;
    })
  );
}

function handleGameDivClick(e) {
  if (e.target.innerText !== "") {
    return;
  }
  moveNum % 2 === 0 ? (e.target.innerText = "O") : (e.target.innerText = "X");
  moveNum++;
}
function endGame() {
  return;
}
function lastPlayer(player) {
  player.innerText === "X" ? (winner = "X") : (winner = "O");

  pobednik.innerText = `The winer is ${winner}, 
 If you think you learn something click magic button RESTART`;
}

function checkWiner() {
  if (
    gameMatrix[0][0].innerText !== "" &&
    gameMatrix[0][2].innerText !== "" &&
    gameMatrix[0][0].innerText === gameMatrix[0][1].innerText &&
    gameMatrix[0][1].innerText === gameMatrix[0][2].innerText
  ) {
    lastPlayer(gameMatrix[0][2]);
  }
  if (
    gameMatrix[1][0].innerText !== "" &&
    gameMatrix[1][2].innerText !== "" &&
    gameMatrix[1][0].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[1][2].innerText
  ) {
    lastPlayer(gameMatrix[1][2]);
  }
  if (
    gameMatrix[2][0].innerText !== "" &&
    gameMatrix[2][2].innerText !== "" &&
    gameMatrix[2][0].innerText === gameMatrix[2][1].innerText &&
    gameMatrix[2][1].innerText === gameMatrix[2][2].innerText
  ) {
    lastPlayer(gameMatrix[2][2]);
  }
  if (
    gameMatrix[0][0].innerText !== "" &&
    gameMatrix[2][0].innerText !== "" &&
    gameMatrix[0][0].innerText === gameMatrix[1][0].innerText &&
    gameMatrix[1][0].innerText === gameMatrix[2][0].innerText
  ) {
    lastPlayer(gameMatrix[2][0]);
  }
  if (
    gameMatrix[0][1].innerText !== "" &&
    gameMatrix[2][1].innerText !== "" &&
    gameMatrix[0][1].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[2][1].innerText
  ) {
    lastPlayer(gameMatrix[2][1]);
  }
  if (
    gameMatrix[0][2].innerText !== "" &&
    gameMatrix[2][2].innerText !== "" &&
    gameMatrix[0][2].innerText === gameMatrix[1][2].innerText &&
    gameMatrix[1][2].innerText === gameMatrix[2][2].innerText
  ) {
    lastPlayer(gameMatrix[2][2]);
  }
  if (
    gameMatrix[0][0].innerText !== "" &&
    gameMatrix[2][2].innerText !== "" &&
    gameMatrix[0][0].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[2][2].innerText
  ) {
    lastPlayer(gameMatrix[2][2]);
  }
  if (
    gameMatrix[2][0].innerText !== "" &&
    gameMatrix[0][2].innerText !== "" &&
    gameMatrix[2][0].innerText === gameMatrix[1][1].innerText &&
    gameMatrix[1][1].innerText === gameMatrix[0][2].innerText
  ) {
    lastPlayer(gameMatrix[0][2]);
  }
}

function restart() {
  for (let i = 0; i < gameMatrix.length; i++) {
    for (let j = 0; j < gameMatrix[i].length; j++) {
      gameMatrix[i][j].innerText = " ";
    }
    winner = "";
  }
}
