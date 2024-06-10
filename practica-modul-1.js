//!перевірка віку користувача
//const userAge = 13;
//const result = userAge >= 18;
//console.log(result); //folse

//!розпарсити (дістати цифри з рядка)
//const x = "25px";
//const y = "30.2452212px";
//const numberX = Number.parseInt("25px");//TODO:розпарсити (дістати цифри (ціле число) з рядка від початку до першої літери чи іншого значення)
//console.log(numberX);
//const numberY = Number.parseFloat("30.2452212px");//TODO:розпарсити (дістати цифри (число з плаваючою крапочкою) з рядка від початку до першої літери чи іншого значення)
//console.log(numberY);

//!перевірити вік користвача різними методами
/*const userAge = prompt("Enter your age");

const result1 = +userAge > 18;
const result2 = Number(userAge) > 18;
const result3 = Number.parseFloat(userAge) > 18;
const result4 = Number.parseInt(userAge) > 18;
const result5 = userAge > 18;

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
*/
// ! Метод Math.   //метод для заокруглення цифр
/*const t = 4.5;

const x = Math.round(t); //заокруглює до найближчого цілого числа
const y = Math.ceil(t); //заокруглює до більшого числа
const q = Math.floor(t); //заокруглює до меншого числа

console.log(x);
console.log(y);
console.log(q);
*/
//* Напиши скрипт, який у консоль заокруглені вгору?вниз і т.д.
/*const Value = 27.5;

console.log(Math.round(Value));
console.log(Math.ceil(Value));
console.log(Math.floor(Value));


//* щоб заокруглити з цифрами, що написані після крапки(десяті/соті і т.д.)
const x = 15.984;

const copyX = Math.round(x * 1000) / 1000;

console.log(copyX);
*/

// ! ФУНКЦІЇ
/*function sum(x, y) {
    const result = x + y; // 99
    return result;
}

const t1 = sum(25, 74);

console.log(t1);
*/


// ! Функція розрахунку індекса маси тіла
/*
*Напиши функцію calcBMI(weight, height) яка розраховує та повертає 
індекс маси тіла людини.

*Для цього необхідно розділити вагу на квадрат висоти.

*Вага та висота будуть спеціально передані як рядки.

*Не цілі числа можуть бути задані у вигляді 24.7 або 24,7, тобто
як роздільник дробової частини може бути кома.

*Індекс маси тіла необхідно округлити до однієї цифри після коми.
*/

/*
const bmi = calcBMI("88,3", "1.75"); // дані записані у вигляді рядка
console.log(bmi); //28.8

function calcBMI(weight, height) {
    weight = +weight.replace(",", "."); // + перетворює рядок на число
    height = +height.replace(",", "."); // replace заміняє , на .

    const result = weight / height ** 2; // ділимо вагу на квадрат висоти (**2 - відведене до степеня 2)
    return result.toFixed(1); // методом toFixed() зменшуємо кількість чисел після коми до 1
}
*/