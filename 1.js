//Задание 1
let variable = +prompt("Ведите число")
if (typeof variable === 'number') {
    if (variable %2 == 0){
        console.log("Число четное")
    }
    if (variable %2 != 0){
        console.log("Число нечетное")
    }
    if ((isNaN(variable))) {
        console.log("Упс, кажется, вы ошиблись, это NaN")
    }
    else if (typeof variable !== 'number'){
    console.log("Упс, кажется, вы ошиблись")
    }
}