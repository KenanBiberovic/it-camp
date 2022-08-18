// const array = [22, 12, 35, 68, 48, 55];
// let min = [];
// let max = [];

// for (let i = 0; i < array.length; i++) {
//   if (array[i] > max) {
//     max = array[i];
//     console.log("max " + max);
//   }
//   if (array[i] < min) {
//     min = array[i];
//     console.log("min " + min);
//   }
// }

const array = [23, 44, 55, 66, 77, 88];
let neparni = [];
let parni = [];
for (i = 0; i < array.length; i++) {
  if (array[i] % 2 === 0) {
    parni = array[i];
    console.log("Parni" + parni);
  }
  if (array[i] % 2 !== 0) {
    neparni = array[i];
    console.log("neparni" + neparni);
  }
}
