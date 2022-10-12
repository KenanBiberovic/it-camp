const root = document.querySelector("#root");

const gameMatrix = createTable();

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
