//temperatura
temp = Number(prompt("Input days temperature :"));
if (temp < 0) {
  console.log("Freezing weather.");
} else if (temp < 10) {
  console.log("Very cold weather.");
} else if (temp < 20) {
  console.log("Cold weather.");
} else if (temp < 30) {
  console.log("Normal in Temp");
} else if (temp < 40) {
  console.log("Its Hot.");
} else {
  console.log("Its very hot.");
}
