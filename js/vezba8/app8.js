// function likes(names) {
//   if (names.lenght === 0) {
//     return "no one likes this";
//   } else if (names.lenght == 1) {
//     return `${names[0]}, Like this";
//   } else if (names.lenght === 2) {
//     return `${names[0]}, and ${names[1]}, like this`;
//   } else if (names.lenght === 3) {
//     return '${names[0]}, ${names[1]} and ${names[2]} "like this"';
//   } else {
//     let broj = names.lenght - 2;
//     return "${names[0]} ${names[1]} and  ${broj} others like this";
//   }
// }
// const str = likes(["ahmed", "kenan"]);
// console.log(str);

// function FindMissingLetter(arr) {
//   const niz1 = [
//     "a",
//     "b",
//     "c",
//     "d",
//     "e",
//     "f",
//     "g",
//     "h",
//     "i",
//     "j",
//     "k",
//     "l",
//     "m",
//     "n",
//     "o",
//     "p",
//     "q",
//     "r",
//     "s",
//     "t",
//     "u",
//     "v",
//     "w",
//     "x",
//     "y",
//     "z",
//   ];
//   let start = niz1.indexOf(arr[1]);

//   for (i = 0; i <= arr.length + 1; i++) {
//     if (arr[i] !== niz1[start + i]) {
//       return niz1[start + i];
//     }
//   }
// }

// function grow(x) {
//   const arr = [];
//   let mult = 0;
//   for (i = 0; i <= arr.length; i++) {
//     mult = arr[i] * arr[i + 1];
//   }
//   return mult;
// }
// function sumMix(x) {
//   const x = [];
//   sum = 0;
//   for (i = o; i <= x.lenght; i++) {
//     sum += x.lenght;
//   }
//   return sum;
// }

// function XO(str) {
//   let Onum = "";
//   let Xnum = "";
//   for (i = 0; i <= str.length; i++) {
//     if (str[i].toLowerCase() == "x") {
//       Xnum += str[i];
//     }
//   }
//   if (stri[i].toLowerCase() == "o") {
//     Onum += str[i];
//   }
//   return Xnum.length == Onum.length;

// }
// const a = [3, 4, "2j", "j", "fer", 7, 5, 6];
// function filter_list(l) {
//   let array = [];
//   for (i = 0; i <= l.length; i++) {
//     if (!isNaN(l[i])) {
//       // console.log(l[i].typeOf());
//       array.push(l[i]);
//     }
//   }
//   return array;
// }
// console.log(filter_list(a));

// const niz= [1,2,3,4];

// function addTwo
// map,filter,reduce

// function modifyMultiply(str, loc, num) {
//   wordArr = str.split(" ");
//   word = [];
//   for (i = 0; i < num; i++) {
//     word.push(wordArr[loc]);
//   }
//   word = word.join("-");
//   return word;
// }
// result = modifyMultiply("This is a string", 3, 5);

// function StantonMeasure(argArr) {
//   n = 1;
//   x = 0;
//   for (i = 0; i <= argArr.length; i++) {
//     if (n === argArr[i]) {
//       x++;
//     }
//     return x;
//   }
// }

// function disemvowel(str) {
//   const NewStr = ("a", "e", "i", "o", "u");
//   if (str == NewStr) {
//   }
//   return str;
// }
