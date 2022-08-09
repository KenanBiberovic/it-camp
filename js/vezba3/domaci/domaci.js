unos = Number(prompt("Unesi broj"));
brojevi = "";
cifra = 1;
for (i = 1; i <= unos; i++) {
  space = "";
  for (j = 1; j <= unos - i; j++) {
    space += " ";
  }
  brojevi += i + " ";
  console.log(space + brojevi);
}
