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
// lozinka = "lozinka";
// unos = prompt("Unesite lozinku:");
// while (unos !== lozinka) {
//   console.log("Lozinka nije tacna!");
//   unos = prompt("Unesite lozinku:");
//   if (unos === lozinka) {
//     console.log("Lozije je tacna!");
//     break;
//   }
// }
//~~~~~~~~~~~

// zamisljeni = 6;
// unos = Number(prompt("Unesi neki broj"));

// while (unos !== 0) {
//   if (zamisljeni === unos) {
//     console.log("Pogodili ste ");
//     break;
//   }

//   if (unos > zamisljeni) {
//     console.log("Uneli ste prevelik broj");
//   } else {
//     console.log("Vas broj mali");
//   }
//   unos = Number(prompt("Unesi novi broj"));
// }

//~~~~~~~~~POMOCPOMOCPOMOC

unos = Number(prompt("Unesite raspon brojeva"));
for (i = 10; i <= 20; i++) {
  console.log(i);
}

while (i !== unos) {
  if (i === unos) {
    console.log("Pogodili ste raspon brojeva");
    break;
  }
  if (i < unos) {
    console.log("Unos je veci od raspona!");
    console.log(unos);
    unos = Number(prompt("Unesite raspon brojeva"));
  } else {
    console.log("Unos je manji od raspona");
    console.log(unos);
    unos = Number(prompt("Unesite raspon brojeva"));
  }
}

// //~~~!~~~!~~~!~~~~
// sabiranje = 0;
// oduzimanje = 0;
// deljenje = 0;
// mnozenje = 0;
// unos1 = Number(prompt("Unesite prvi broj: "));
// unos2 = Number(prompt("Unesite drugi broj: "));
// console.log("Pritisnite 1 za sabiranje 2 broja");
// console.log("Pritisnite 2 za oduzimanje 2 broja");
// console.log("Pritisnite 3 za mnozenje 2 broja");
// console.log("Pritisnite 4 za deljenje 2 broja");

// unos3 = Number(prompt("Unesite zeljenu operaciju"));
// if (unos3 === 1) {
//   sabiranje = unos1 + unos2;
//   console.log("Rezultat sabiranja je " + sabiranje);
// }
// if (unos3 === 2) {
//   oduzimanje = unos1 - unos2;
//   console.log("Rezultat oduzimanja je  " + oduzimanje);
// }
// if (unos3 === 3) {
//   deljenje = unos1 / unos2;
//   console.log("Rezultat deljenja je " + deljenje);
// }
// if (unos3 === 4) {
//   mnozenje = unos1 * unos2;
//   console.log("Rezultat mnozenja je " + mnozenje);
// }
