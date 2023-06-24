const filePath = process.platform === "linux" ? "/dev/stdin" : "./3652.txt";
const fs = require("fs");
const input = fs.readFileSync(filePath).toString().trim();

const makeBird = (bird, route) => {
  if (bird == input) return route;

  const L = 1 / (bird + 1);
  const R = 1 / bird + 1;

  console.log("L " + L);
  console.log("R " + R);
  console.log(input);

  makeBird(L, route + "L");
  makeBird(R, route + "R");
};

console.log(makeBird(1, ""));
