//Задание 4
let variable;
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
variable = getRandomIntInclusive(0,100);
console.log(variable);