//Задание 6
let num = [1,2,3,4,5,1,4];
for (let i = 0; i < num.length; i++) {
  for (let x = 0; x < num.length; x++) {
     if (num[i] == num[x]) {
      console.log(`${num[i]} is equal to ${num[x]}: true`)
     } else {
      console.log(`${num[i]} is equal to ${num[x]}: false`)
     }
    }
   }