//Задание 7
let arr = [1, 2, 3, 4, 5, 0, "hg"];
let even = 0;
let odd = 0;
let zero = 0;
for (let i = 0; i < arr.length; i++){
  if (typeof arr[i] == 'number'){
    if (arr[i] % 2 == 0 && arr[i] != 0){even++}
    if (arr[i] == 0){zero++}
    if (arr[i] % 2 != 0){odd++}
  }
}
console.log(even, odd, zero)