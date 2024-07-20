// ! Розгалуження
// TODO: інструкція if
// TODO: інструкція if...else
// TODO: блок else...if
// TODO:тернарний оператор


// ! debugger; дозволяє покроково перевірити виконання коду в консолі розробника

/*debugger;
 const userAge = 10;

 console.log("BEFORE IF");

 if (userAge >= 18) {
    console.log("Hello IF");
 }

 console.log("AFTER IF");
*/


// TODO: перевірка балансу на рахунку
 // * якщо баланс більший за 0 то вивести повідомлення "Баланс позитивний"
 // * інакше вивести повідомлення "Баланс негативний"
/*const balance =1000;
let message;

if (balance > 0) {
    message = "Баланс позитивний";
}else {
    message = "Баланс негативний";
}

console.log(message);
*/


// ! багатоваріантна перевірка
// TODO: вартість номеру в готелі за кількістю зірок
/*const stars = 5;
let price;

if (stars === 5) {
    price = 500;
}else if (stars === 4) {
    price = 400;
}else if (stars === 3) {
    price === 300;
}else {
    price = 150;
}
*/


// TODO: перевірка віку (18 років) відвідувачів клубу 
/*const age = 15;
const balance = 5;
const vip = true;

if (age >= 18) {
    console.log("Welcome");
}else if (balance >= 100) {
    console.log("Welcome, shket");
}else if (vip) {
    console.log("Hello");
}else {
    console.log("Bye");
}
*/


// ! Як рядок коду лише один - можна писати без фігурних идужок
// *                     if(age > 18)console.log("Hello");
// *                     else console.log("Bye");




// TODO: тернарний оператор (складається з 3-х частин)
/*const age = 10;
let message;

message = age > 18 ? "Hello" : "Bye";

console.log(message);
*/



// TODO: напиши скрипт для відображення годин та хвилин у консолі браузера
// TODO: у вигляді рядка формату "14 г. 26 хв.". 
// TODO: Якщо значення змінної minutes дорівнює 0 то виводь рядок "14 г.", 
// TODO: без хвилин.
/*const hours = 14;
const minutes = 26;
let timestring;

if (minutes === 0) {
    timestring = `${hours} г.`;
}else {
    timestring = `${hours} г. ${minutes} хв.`;
}

console.log(timestring);
*/
// ! попередню задачу можна записати за допомогою тернарного оператора,
// ! (бо в ній лише 2 умови) 
/*const hours = 14;
const minutes = 26;
let timestring = minutes === 0 ? `${hours} г.` : `${hours} г. ${minutes} хв.`;

console.log(timestring);
*/


// TODO: Напиши скрипт для відображення часу дедлайну задачі проекту.
// TODO: Використовуй if...else
// TODO: Якщо до дедлайну 0 днів - виведи рядок "Today"
// TODO: Якщо до дедлайну 1 день - виведи рядок "Tomorrow"
// TODO: Якщо до дедлайну 2 день - виведи рядок "Overmorrow"
// TODO: Якщо до дедлайну 3+ день - виведи рядок "Date in the future"
/*const daysUntiDeadline = 3;

if (daysUntiDeadline === 0) {
    console.log("Today");
}else if (daysUntiDeadline === 1) {
    console.log("Tomorrow");
}else if (daysUntiDeadline === 2) {
    console.log("Overmorrow");
}else {
    console.log("Date in the future");
}
*/



// ! Оператор порівняння           switch() {
// !                                 case
// !                               } 
/*const username = "Mango";

switch(username) {
    case "Poly": 
       console.log("Hello Poly");
         break;
    case "Vasya":
       console.log("Hello Vasya"); 
         break;
    case "Roman":       
       console.log("Hello Roman"); 
         break;
    case "Max":
        console.log("Hello Max"); 
        break;
    case "Mango":
        console.log("Hello Mango"); 
        break;
    case "Mila":
        console.log("Hello Mila"); 
        break;

        default: break;
}
  */


// TODO: скорочення цієї задачі: 
/*const daysUntiDeadline = 3;

if (daysUntiDeadline === 0) {
    console.log("Today");
}else if (daysUntiDeadline === 1) {
    console.log("Tomorrow");
}else if (daysUntiDeadline === 2) {
    console.log("Overmorrow");
}else {
    console.log("Date in the future");
}
*/
// TODO: за допомогою switch()
/*const daysUntiDeadline = 5;
switch(daysUntiDeadline) {
    case 0:
        console.log("Today");
        break;
    case 1:
        console.log("Tomorrow");
        break;
    case 2:
        console.log("Overmorrow");
        break;
    default:
        console.log("Date in the future");
        break;
}
*/



// TODO: Напиши скрипт вибору опції доставки довару.
// TODO: Опція зберігається у змінній option: 1 - самовивіз, 2 - рур'єр,
// TODO: У змінну message записати повідомлення, залежне від вибраної опції:
// TODO: - "Ви зможете забрати товар завтра з 12:00 в нашому офісі"
// TODO: - "Кур'єр доставить замовлення завтра з 9:00 до 18:00"
// TODO: - "Замовлення буде відправлене сьогодні"
// TODO: - "Вам зателефонує менеджер"
/*const option = 1;
let message = "";

switch(option) {
    case 1:
        message = "Ви зможете забрати товар завтра з 12:00 в нашому офісі";
        break;
    case 2:
        message = "Кур'єр доставить замовлення завтра з 9:00 до 18:00";
        break;
    case 3:
        message = "Замовлення буде відправлене сьогодні";
        break;
    default:
        message = "Вам зателефонує менеджер";
        break;
}
console.log(message);
*/




// ! Логічні оператори
// ! - Перетворення типів: логічне

// ! - оператор && (завжди повертає ліву частину, якщо там false; в інших випадках повертає праву частину)
// ! тобто, повертає перший false або останній true.
/*console.log(1 && 4); // 4
console.log(2 && 4); // 4
console.log(3 && 4); // 4
console.log(4 && 4); // 4
console.log(5 && 4); // 4
console.log(6 && 4); // 4


console.log(0 && 1); // 0
console.log(0 && 2); // 0
console.log(0 && 3); // 0
console.log(0 && 4); // 0
console.log(0 && "Hello"); // 0 
console.log(0 && 6); // 0
console.log(0 && 7); // 0
*/


// ! - оператор || (або)
/*console.log(true || 5); // true
console.log(true || false); // true
console.log(true || 0); // true
console.log(true || null); // true
console.log(true || NaN); // true
console.log(true || 7); // true



console.log(false || 5); // 5
console.log(false || false); // false
console.log(false || 0); // 0
console.log(false || null); // null
console.log(false || NaN); // NaN
console.log(false || 7); // 7
*/



// ! - оператор !

/*console.log(!5); // false
console.log(!false);// true
console.log(!null);// true
console.log(!0);// true
console.log(!"Hello"); // false
*/



/*const name = "Vasya";

const username = name || "Anonym";

console.log(`Hello ${username}`);
*/


// TODO: true - 1
// TODO: false - 0
// TODO: && - *
// TODO: || - +

 /*const bulean =  true || false && true && false && false || true && false;
//                   1 + (0 * 1 * 0 * 0) + (1 * 0);
//                   1 + 0 + 0 = 1;
   console.log(bulean); // true
*/




// TODO: напиши скрипт перевірки підписки користувача при доступі до контента
// TODO: Є три типа перевірки: free, pro і vip.
// TODO: Отримати доступ можуть тільки користувачі pro і vip.


/*const sub = "free";

if (sub === "pro" || sub === "vip") {
    console.log("Ok");
} else {
    console.log("Error");
}
*/

// * Інший варіант задачі
//const message = subs === "pro" || subs === "vip" ? "Ok" : "Error";





// TODO: Напиши скрипт, який перевіряє можливість відкрити чат з користувачем.
// TODO: Для цього користувач має бути:
// TODO: - другом,
// TODO: - онлайн,
// TODO: - без режима "не турбувати".

/*const isOnline = true;
const isFrend = true;
const isDnd = false;

const canOpenChat = isOnline && isFrend && !isDnd;

console.log("Можливо відкрити чат?" , canOpenChat);
*/




// TODO: Напиши скрипт, який перевіряє введене користувачем ім'я.
// TODO: Якщо введене значення порожнє то виведи рядок "Hello Fnonimus"
// TODO: В іншому випадку привітай користувача повідомленням "Hello (name)"

const userName = `Vasya`;

// * перший варіант рішення:
/*if (userName) {
    console.log(`Hello ${userName}`);
} else {
    console.log(`Hello Anonimus`);
}
*/
// * другий варіант рішення:
//console.log(`Hello ${userName || `Anonimus`}`);




// ! МЕТОДИ ............................................................................................

/** МЕТОДИ РЯДКІВ
 * - slice (обрізання рядків)
 * - toLowerCase/toUpperCace
 * - includes
 * - startsWith/endsWith
 * - indexOf
 * - trim
 */


// TODO: slice
const username = `userName`;
 /*const copy 2 = username.slice(1, 7);
 const copy 2 = username.slice(4);
 const copy 2 = username.slice(0, 4);
 const copy 2 = username.slice();
 */
 const copy = username.slice(1, username.length - 1);

 console.log(username);


















// ! Це важливий коментар
// * Це позитивний коментар
// ? Це питання
// TODO: Завдання на потім