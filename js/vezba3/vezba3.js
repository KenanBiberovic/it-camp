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

unos = Number(prompt("Unesi broj"));
zvezdice = "";

for (i = 1; i <= unos; i++) {
  space = "";
  for (j = 1; j <= unos - i; j++) {
    space += " ";
  }
  zvezdice += "* ";
  console.log(space + zvezdice);
}