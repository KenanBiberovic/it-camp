// const arr = ["prvi", "drugi", "treci", "cetvrti", "peti"];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }
// for (let i = arr.length - 1; i >= arr.length; i--) {
//   console.log(arr[i]);
// }

// const niz = ["ime", "prezime"];

// console.log(niz[0] + " " + niz[1]);

// prompit unos brojevi niza deljiv sa 3 i 5

// while (true) {
//   let entry = Number(prompt("Unesi broj"));
//   if (entry % 3 === 0 && entry % 5 === 0) {
//     break;
//   } else {
//     array.push(entry);
//     console.log(array);
//   }
// }
// console.log(array);

// let niz = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let parniniz = [];
// let neparniniz = [];
// for (i = 0; i < niz.length; i++) {
//   if (i % 2 === 0) {
//     parniniz.push(niz[i]);
//   } else {
//     neparniniz.push(niz[i]);
//   }
// }
// console.log(parniniz);
// console.log(neparniniz);
// 123412341234~~~~~~~
// const a="AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBABABABABABABABABABABABABABABABABABABABABABABABABABABAAAAAAAAAAAAAAAAAAAAAAAAAAA";
// const b="AAAAAAAAAAAAAAAAAAAAAAAAABBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";

// unos = String(prompt("Unesite rec: "));
// let novistr="";
// let duzina = unos.length;

// if (unos > 10) {
//      novistr = unos[0] + (duzina - 2) + unos[duzina - 1];
//   console.log(novistr);
// }
// console.log(unos);

// let array = ["r", "e", "c", "e", "n", "i", "c", "a"];
// for (i = 0; i <= array.length; i++) {
//   console.log(array[i]);
// }
// for (i = array.length - 1; i >= 0; i--) {
//   console.log(array[i]);
// }

// const niz = [2, 5, 8];
// console.log(niz);
// sum = 0;
// for (i = 0; i < niz.length; i++) {
//   sum += niz[i];
//   console.log(sum);
// }

// const niz1 = [2, 3, 4, 5];
// const niz2 = [7, 8, 9];
// niz1.push(niz2);
// console.log(niz1);

// const array = [2, 3, 5, 6, 6, 3, 5];
// let count = 0;

// for (i = 0; i < array.length; i++) {
//   for (j = i + 1; j < array.length; j++) {
//     if (array[i] == array[j]) {
//       count++;
//       break;
//     }
//   }
// }
// console.log("duplikati " + count);

// const array = [2, 3, 5, 6, 6, 6];
// let unique = [];
// inside = false;
// for (i = 0; i < array.length; i++) {
//   for (j = 0; j < unique.length; j++) {
//     if (arr[i] === unique[j]);
//     inside = true;
//     break;
//   }
//   if (inside) {
//     continue;
//   } else {
//     unique.push(array[i]);
//   }
// }

const array = [22, 12, 35, 68, 48, 55];
let min = [];
let max = [];

for (let i = 0; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
  if (array[i] < min) {
    min = array[i];
  }
}
console.log("max " + max);
console.log("min " + min);