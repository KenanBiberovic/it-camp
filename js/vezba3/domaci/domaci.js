brojac = 1;
string = "";
unos = Number(prompt("unos :"));
for (let i = 1; i <= unos; i++) {
  for (let j = 1; j <= unos - i; j++) {
    string += " ";
  }

  for (let k = 1; k <= 2 * i - 1; k++) {
    string += brojac + " ";
    brojac++;
  }
  string += "\n";
}
console.log(string);
