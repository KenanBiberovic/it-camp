// trougao
unos1 = Number(prompt("Input first angle of triangle :"));
unos2 = Number(prompt("Input second angle of triangle :"));
unos3 = Number(prompt("Input third angle of triangle :"));
sum = unos1 + unos2 + unos3;
if (sum == 180) {
  console.log("Triangle is valid");
} else {
  console.log("Triangle is not valid");
}
