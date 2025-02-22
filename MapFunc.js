//let's calculate area, circumference, diameter of a circle

const radius = [1, 2, 3, 4];

function area(x) {
  return Math.PI * x * x;
}
function circumference(x) {
  return 2 * Math.PI * x;
}
function diam(x) {
  return 2 * x;
}
console.log(radius.map(area));
console.log(radius.map(circumference));
console.log(radius.map(diam));
