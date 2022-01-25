//////////////////////////
// '='
// '/'
let addition = 1 + 1; // number int
let deduction = 2 - 5;
let division = 2 / 5;
let multiplication = 2 * 5

let result1 = 1 + (1 - 5) * 5
let result2 = (1 + 1) - (5 * 5)

let result3 = addition + deduction - division
let result4 = (addition + deduction) - division
let result5 = addition + (deduction * division)

// let result190 = result3 == result4;
// let result191 = result3 === result4;

// console.log(result1);
// console.log(result2);
// console.log(result3);
// console.log(result4);
// console.log(result5);

let name = 'Jun'
let msg = 'Hello, World from'
let concat = msg + " " + name;
// console.log(concat);

let result = 10 - 58 + '45' / 8 + 58
// let result = 'String ' + String(58) // '58'
// console.log(result);


// -------------------------------------

// + -
let string1 = '25'
console.log(string1)
console.log(typeof string1)

let string2 = Number('25')
console.log(string2)
console.log(typeof string2)

let string3 = +'25'
console.log(string3) // 25 - the same as Number('25')
console.log(typeof string3) // number

let string4 = -25
console.log(string4) // -25
console.log(typeof string4) // number

let string5 = -(-25)
console.log(string5) // 25
console.log(typeof string5) // number

let string6 = '25'
let string7 = '100'
console.log(string6 + string7) // 25100
console.log(+string6 + +string7) // 125
console.log(Number(string6) + Number(string7)) // the same but longer 124

let string8 = 1 + 1
let string9 = '1' + 1

let string10 = +1
let string11 = +(-1)
console.log(string11)
console.log(string11)

let string12 = +true; // Number(true) 1
console.log(string12);
let string13 = +false; // Number(false) 0
console.log(string13);
let string14 = +''; // Number('') 0
console.log(string14);
let string15 = +'123'; // Number('123')  123 (number)
console.log(string15);
let string16 = +'123b'; // Number(+'123b') NaN (number)
console.log(string16);

/////////////////////////////////////////////////////////////

// DO NOT DO IT!
let resultA = 1
let resultB = 2
let resultC = 3 - (resultA = resultB - 3);

// ще один варіант присвоєння  DO NOT DO IT!
let var1 = 1;
let var2 = 1, var3 = 3;
let var4 = var1 = var2 = var3; // ????????????
console.log(var4);

////////////////////////////// декремент-- інкремент++    "постфиксная"
let incr1 = 1;
incr1++; // incr1 = incr1 + 1
console.log(incr1);

let incr2 = 100;
incr2--; // incr2 = incr2 - 1     ///// short version?
console.log(incr2);

let incr3 = 100;
let incr4 = incr3++;
console.log(incr4);
console.log(incr3);

////////////////////////////// --декремент ++інкремент    "префиксная"

let incr5 = 100;
let incr6 = ++incr5;
console.log(incr5);
console.log(incr6);

let incr7 = 100;
let incr8 = (++incr7) * incr5++;
console.log(incr7);
console.log(incr8);

/////////////////////////////////// оператори порівняння
// a > b, a < b, a >= b, a <= b, a == b, a != b, a === b, a !== b
// завжди повертає boolean: true or false

console.log(2 > 1); // true
console.log(2 < 1); // false
console.log(2 >= 2); // true
console.log(2 >= 1); // true
console.log(2 <= 1); // false
console.log(2 <= 2); // true

console.log(true < false); // false
console.log(true > false); // true

console.log(2 == 2); // true
console.log(2 == 1); // false
console.log(2 != 2); // false
console.log(2 != 1); // true

const age1 = 19;
const age2 = 18;
const age3 = 17;
const limit = 18;
const limit1 = limit <= age1;
const limit2 = limit <= age2;
const limit3 = limit <= age3;
console.log(limit1);
console.log(limit2);
console.log(limit3);
console.log(limit1, limit2, limit3);

console.log(2 < 2 < 3 > 2 < 5 > 234); // DO NOT DO IT

let waist1 = 50;
let waist2 = 55;
let waist3 = 60

const flyLimit = 55;
const flyLimit1 = flyLimit <= waist1;
const flyLimit2 = flyLimit <= waist2;
const flyLimit3 = flyLimit <= waist3;
console.log(flyLimit1, flyLimit2, flyLimit3);

// Порівняння із стрінгом (рядковим типом) відбувається за алфавітним порядком 'A B' x1FG12 123  0101100101 < 0123010230
console.log('А' > 'Б'); // false
console.log('Б' > 'А'); // true
console.log('Я' >= 'А'); // true
console.log('Я' !== 'А'); // true
console.log('А' === 'А'); // true
console.log('А' === 'а'); // false
console.log('А' > 'а'); // false
console.log('А' < 'а'); // true

console.log('AA' === 'AA'); // true
console.log('AA' === 'AB'); // false
console.log('AA' > 'AB'); // false
console.log('Console Console' < 'Console console'); // true

// coercion and comparison
console.log('58' > 10); // Number('58') > 10 /////  58 > 10 = true
console.log('007' > 10); // false
console.log('Dog' > 10); // Number('Dog') // NaN


console.log(true > 1); // false Number(true) // 1
console.log(false > 1); // false
console.log(false == 1);  // false
console.log(false == 0);  // true

console.log(NaN === NaN) // false
console.log(NaN > 10) // false

console.log('///////') /// ?????????????????????? NUMBER
console.log(Boolean('Dog'))
console.log(Number('Dog'))
console.log(true > 10);
console.log(NaN > 10);

///////////////////////////////////
const x = 0;
console.log(Boolean(x)); // false
const y = '0';
console.log(Boolean(y)); // true

console.log(x == y) // true
console.log(0 == '0') // true // 0 == Number('0')
console.log(0 === '0') //
console.log(0 === 1) //
console.log(0 !== 1) //


///////////////////////////////////

// Взятие остатка a % b           ???? modulo
console.log(5 % 2); // 5 / 2 = 4 (1 в залишку)
console.log(5 / 2); // 5 / 2 = 2.5
console.log(10 % 2); // 10 / 2 = 0
console.log(10 % '2'); // 10 / 2 = 0
console.log(10 % true); // 10 / 1 = 0   // Number(true)
console.log(10 % 'true'); // NaN   // Number('true')

// Зведення до ступеню a ** b
console.log(2 ** 2); // 4 (2 * 2)
console.log(2 ** 3); // 8 (2 * 2 * 2)
console.log(4 ** 0.5); // 2

// !a   унарний оператор "ні" (не)
console.log(!true); // false
console.log(!false); // true
console.log(!2); // false // !Boolean(2) > !true > false
console.log(!''); // true // !Boolean('')
console.log(!'1'); // false // !Boolean('1')
console.log(!undefined); // true // !Boolean(undefined)
console.log(!null); // true // !Boolean(null)
console.log(!{}); // true // !Boolean({})
console.log(typeof {}); // object

// a ?? b - Оператор обʼєднання із null
let userName1;
console.log(userName1 ?? 'Anonymous'); // 'Anonymous'

let userName2 = undefined;
console.log(userName2 ?? 'Anonymous'); // 'Anonymous'

let userName3 = null;
console.log(userName3 ?? 'Anonymous'); // 'Anonymous'

let userName4 = 'Mitya';
console.log(userName4 ?? 'Anonymous'); // 'Mitya'

let userName5 = NaN;
console.log(userName5 ?? 'Anonymous'); // NaN


// IF ELSE умовний оператор

//if(умова результат якої має бути boolean)   Boolean()
// if (true)
// if (false)

if (true) {
    console.log(`I AM IN THE 'true' IF`);
    console.log(`I AM IN THE 'true' IF`);
}

if (false) {
    console.log(`I AM IN THE 'false' IF`);
}

const msg1 = 'Hello, World!';
if (2 > 1) {
    console.log(msg1);
}

const arg1 = 10;
const arg2 = 20;
const msg2 = 'Hello, World!';
if (!(arg1 > arg2)) {
    console.log(msg2);
}

if ('') { // Boolean('') > false
    console.log('WTH?!')
}
if (1) { // Boolean(1) > true
    console.log('WTH?!')
}

// false??? Boolean(x) ... 0, '', null, undefined, NaN, false  - falsy

const x10 = 10;
const x20 = 20;
if (x10 === x20) {
    console.log('I am here!')
    console.log('I am here!')
}

if (2 < 1) console.log('NO');
// if(2 < 1) {console.log('NO')}
console.log("YES");


const message123 = 'I am hero!';
const number50 = 50;
if (number50 > 100) {   // if () ,  if(){}, if(){}else{}
    console.log('NO WAY!');
} else {
    console.log(message123);
}


//const message123 = 'I am hero!'; const number50 = 50;if (number50 > 100) {   console.log('NO WAY!');} else console.log(message123);}
//00101010101010010101010001010101010100101010100010101010101001010101000101010101010010101010001010101010100101010100010101010101001010101000101010101010010101010


const message1234 = 'I am hero!';
const number5 = 5;
if (number5 > 50) {
    console.log('5 більше за 50');
} else if (number5 > 30) {
    console.log('5 більше за 30');
} else if (number5 > 10) {
    console.log('5 більше за 10');
} else if (number5 > 1) {
    console.log('5 більше за 1');
} else {
    console.log(message1234);
}

const year = 2015;
const condition = (year === 2015);
if (condition) { // year === 2015
    // some condition
}


// Тернарний оператор ОПЕРАНД1 ? OPERAND2 : OPERAND3
// OPERAND1 MUST BE BOOLEAN if not Boolean()
const ageX = 17;
const ageY = 21;
const ageLimit = 18;
const messageRes = (ageX < ageLimit) ? 'Oh, I am sorry!' : `Here ya go.`;
// const messageRes = if (ageX < ageLimit) {'Oh, I am sorry!'} else {`Here ya go.`};
console.log(messageRes);

// The same!
let messageRes3;
if (ageX < ageLimit) {
    messageRes3 = 'Oh, I am sorry!';
} else {
    messageRes3 = `Here ya go.`;
}

const messageRes1 = ageX < ageLimit ? 'Oh, I am sorry!' : `Here ya go.`; // () for humans
const messageRes2 = ageX < ageLimit // can be on the new line
    ? 'Oh, I am sorry!'
    : `Here ya go.`;


if (true) {
    console.log(123);
    if (true) {
        console.log(123);
        if (true) {
            console.log(123);
        }
        console.log(123);
    }
    console.log(123);
}


// LOGIC Логічні оператори a || b, a && b, !a
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false

const logic1 = 50 < 100;
const logic2 = true;
console.log(logic1 || logic2); // true

if (logic2 || logic1) {
    console.log(messageRes3);
}


console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false

const isRegistered = false; // checkRegistration() false
const hasEmail = false; // checkEmail() false
if (!isRegistered && !hasEmail) {
    console.log('Send welcome email and registration link');
}


console.log(Boolean(5) && Boolean(7));
const resultUnknown = 5 && 7; // ??????????????????  7
console.log(resultUnknown);

console.log(0 && 1); // false true
console.log(0 || 1); // false true
console.log(0 || 1); // false true


let x1 = 1;
x1 = x1 + 1;
x1 += 1;
// x1 += (123123 > 1312 && 123 || (true + {}));
x1 -= 1;
x1 *= 1;
x1 /= 1;
x1 %= 1; // x1 = x1 % 1;
x1 **= 1;


// SWITCH statement вираз | конструкція
const value1 = 1;
switch (value1) {
    case 2:
        console.log('We have 1');
    // case value1 === 1: console.log('We have 1');
}
// the same: if (true) console.log('We have 1');

const value2 = 1; // strict === ==
switch (value2) {
    case 1:
        console.log('We have 1');
        break;
    case 2:
        console.log('We have 2');
        break;
    case 3:
        console.log('We have 3');
        break;
    case 4:
        console.log('We have 4');
        break;
    default:
        console.log('Збігів не знайдено.');
}

// different data types
const value3 = 'Oksana';
switch (value3) {
    case 'Tanya':
        console.log('We have 1');
        break;
    case 'Yarxna':
        console.log('We have 2');
        break;
    case 'Mitya':
        console.log('We have 3');
        break;
    case 'Oksana':
        console.log('We have 4');
        break;
    default:
        console.log('Denys i think is here');
}

// some data manipulation
const value4 = 3; // strict === ==
switch (value4 + 1) {
    case value4 + 1:
        console.log('We have value4+1=2');
        break;
    case 3:
        console.log('We have value4+3=3');
        break;
    case value4 >= 0 && value4 <= 10:
        console.log('We have value4+3=3');
        break;
}

// cases grouping
const value5 = 3;
switch (value5) {
    case 1:
    case 2:
        console.log('We have 1 or 2');
        break;
    case 3:
        console.log('We have 3');
        break;
}

















