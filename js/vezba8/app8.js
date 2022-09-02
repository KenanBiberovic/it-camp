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

function FindMissingLetter(arr) {
  const niz1 = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let start = niz1.indexOf(arr[1]);

  for (i = 0; i <= arr.length + 1; i++) {
    if (arr[i] !== niz1[start + i]) {
      return niz1[start + i];
    }
  }
}
