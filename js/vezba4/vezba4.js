// for (i = 1; i <= 10; i++) {
//   if (i !== 7) {
//     console.log(i);
//   }
// }
//~~~~~~
// sum = 0;
// for (i = 0; i <= 20; i += 2) {
//   sum += i;
//   console.log(i, sum);
// }
//~~~~~~

// unos = Number(prompt("Broj:"));
// for (i = 0; i <= unos; i++) {
//     if(unos% i === 0){ console.log(i);
//     }}

//~~~~~~~~~~~
broj = 1;
unos = Number(prompt("Broj:"));
while (unos > broj) {
  console.log("Broj je veci od zadatog");
  break;

  if (unos < broj) {
    console.log("Broj je manji od zadatog");
    break;
  } else if (unos === broj) {
    console.log("POGODAK!!");
    break;
  }
}
