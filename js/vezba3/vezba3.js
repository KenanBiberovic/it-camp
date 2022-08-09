// string = "";
// unos = Number(prompt("unos :"));
// for (i = 1; i <= unos; i++) {
//   string = string + i;
//   console.log(string);
// }

// unos = Number(prompt("Unos :"));
// for (i = 1; i <= unos; i++) {
//   for (j = 1; j <= i; j++) console.log(i);
// }

unos = Number(prompt("Unos :"));
brojz = "";
for (i = 1; i <= unos; i++) {
  space = "";
}
for (j = 1; j <= unos - 1; j++) {
  space += " ";
}
brojz += "* ";
console.log(space + brojz);
