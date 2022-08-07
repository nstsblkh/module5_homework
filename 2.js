//Задание 2
let x = 6;
switch (typeof x) {
    case ('number' ):
        console.log('X - число');
        break;
     case ('boolean' ):
        console.log('X - логический тип');
        break;
     case ('string' ):
        console.log('X - строка');
        break;
    default:
        console.log('Тип x не определён');
}