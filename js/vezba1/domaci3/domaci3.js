unos1 = Number(prompt("Insert price of article"));
unos2 = Number(prompt("Insert selling price"));
if (unos1 > unos2) {
  racunica = unos2 - unos1;
  console.log("Profit je" + racunica);
} else if (unos2 > unos1) {
  racunica = unos2 - unos1;
  console.log("Gubitak je" + racunica);
} else {
  console.log("Nema profita");
}
