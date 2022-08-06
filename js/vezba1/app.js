//a = prompt("Unesite paran broj");
//if (a % 2 == 0) {
// console.log("Uneli ste paran broj");
//}

//numb1 = prompt("Unesite prvi broj");
//numb2 = prompt("Unesite drugi broj");
//if (numb1 === numb2) {
//console.log("Brojevi su jednaki");
//}
unos1 = Number(prompt("Unesi broj 1."));
unos2 = Number(prompt("Unesi broj 2."));
if (unos1 > unos2) {
  prvi = unos1;
  drugi = unos2;
} else {
  prvi = unos2;
  drugi = unos1;
}

unos3 = Number(prompt("Unesi broj 3."));

if (unos3 > prvi) {
  treci = drugi;
  drugi = prvi;
  prvi = unos3;
} else if (unos3 < drugi) {
  treci = unos3;
} else {
  treci = drugi;
  drugi = unos3;
}

console.log("1. broj je " + prvi);
console.log("2. broj je " + drugi);
console.log("3. broj je " + treci);
