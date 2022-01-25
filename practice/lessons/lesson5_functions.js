// // Оголошення функкції (function declaration)
// let varName;
//
// function name(/* параметри */) {
//     // тело (код) функціїї
// }
//
// showMessage(); // 'Hello, World!'
// function showMessage() {
//     // функція має щось показти
//     console.log('Hello, World!');
// }
//
// showMessage(); // 'Hello, World!'
// showMessage(); // 'Hello, World!'
//
// function getInformation() {
//     // функція має щось оримати
// }
//
// function calcSum345() {
//     // функція робить додавання
// }
//
// function createTigerObj() {
//     // функція створює обʼєкт Тигр
// }
//
// function isUserRegistered() {
//     // функція перевіряє користувача
// }
//
// const outerVar = 'Зовнішня змінна';
//
// // Оголошення функцій всередині функцій
// function calcSum() {
//     // Локальні змінні
//     let numOne, numTwo;
//
//     function setNum1() {
//         numOne = 1;
//     }
//
//     function setNum2() {
//         numTwo = 2;
//     }
//
//     setNum1();
//     setNum2();
//     const result = numOne + numTwo;
//     console.log(result);
// }
//
// calcSum();
// // В іншій області видимості
// // setNum1(); ReferenceError: setNum1 is not defined
// // numOne; // ReferenceError: numOne is not defined
//
//
// // Однакові імена
// const num100 = 1000000000;
//
// function calcSum100() {
//     // функція робить додавання
//     const num100 = 100;
//     const num200 = 200;
//     console.log(num100 + num200);
// }
//
// calcSum100();
//
//
// // Параметри та аргументи
// function calcDivision(numOne /* 10 parameter*/, numTwo /* 5 parameter*/) { // let numOne, letNumTwo         // for(let i = 0;;)
//     console.log(numOne / numTwo);
// }
//
// calcDivision(10 /*argument*/, 5 /*argument*/);
// calcDivision(1111, 534345);
// calcDivision(1143523, 53432342345);
//
//
// // будь які типи даних
// function bindText(partOne, partTwo) {
//     console.log(`${partOne} ${partTwo}`);
// }
//
// bindText(1143523, 53432342345);
// bindText(11.43523, 534.32342345);
// bindText(1143523n, 53432342345n);
// bindText('1143523', '53432342345');
// bindText(true, undefined);
// bindText(null, undefined);
//
//
// // undefined and defaultValue
// function createTigerObj1(color = 'orange&black', eyesNum = 2, size, sound = 'Roooaaaaarrrr!') {
//     // функція створює обʼєкт Тигр
//     console.log({color: color, eyesNum: eyesNum, size: size, sound: sound});
// }
//
// createTigerObj1();
// createTigerObj1(undefined, undefined, {height: 1.5, length: 3, width: 0.5});
// createTigerObj1('White&Black', 3, {height: 10.5, length: 30, width: 0.3}, 'Furrrr..');
//
// // signature сигнатура: name & parameter
// function nameSign(varSign1) {
// }
//
// // функціх в локальних змінних
// function sayHello(){
//     return 'Hello!';
// }
// function showMessage1(from, shoutOut = sayHello()) {
//     console.log(`${shoutOut} from: ${from}`);
// }
// showMessage1('Denys');
// showMessage1('Artem', 'No hello from today an on');
// showMessage1({name: 'Mitia Tiger'}, 2);
//
// // return директива
// console.log('//////////////////////////////////////////////')
// function funcWithReturn(){
//     return 'Hello!';
// }
// funcWithReturn();
// const resultHere = funcWithReturn(); // prompt('Some Message');
// console.log(resultHere);
// console.log(funcWithReturn()); // console.log('Hello!');
//
//
// function funcWithReturnCalc(varX, varY){
//     return varX + varY;
// }
// console.log(funcWithReturnCalc(1, 2));
//
//
// function funcWithReturnCalc1(varX, varY){
//     const result = varX + varY;
//     return JSON.stringify(result + result && result / funcWithReturn()) ;
// }
// console.log(funcWithReturnCalc1(1, 2));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// функції-колбеки (callback function).
function calcSum(numOne, numTwo, more, less) {
    let total = numOne + numTwo;

    if (total > 10) {
        more(); // attack
    } else {
        less(); // protect
    }
}

function showMsgMore1() {
    console.log('This number is bigger than 10');
}

function showMsgLess2() {
    console.log('This number is less than 10');
}

calcSum(4, 4, showMsgMore1, showMsgLess2);


//   анонімні функції
function ask(question, yes, no) {
    confirm(question) ? yes() : no();
}

// the same
// function yes() {
//     alert("Вы согласились.");
// }
// ask(
//     "Вы согласны?",
//     // the same
//     // , yes
//     function () {
//         alert("Вы согласились.");
//     },
//     function () {
//         alert("Вы отменили выполнение.");
//     }
// );


function resultIsUndefined() {
    console.log('Hello'); // hello
    // no return. so returns undefined
}

console.log(resultIsUndefined()); // console.log(undefined); // undefined


function resultIsNumber() {
    console.log('Hello');
    return 5;
}

let functionResult = resultIsNumber(); // function result is , 5
// functionResult = 5;
console.log(functionResult); // 5
console.log(resultIsNumber()); // console.log(5) // Hello 5


/// return директива

function calcSum1(num1, num2) {
    const result = num1 + num2;
    return result;
}

console.log(calcSum1(1, 1));


function calcSum2(num1, num2) {
    return num1 + num2;
    // код не виконується
    console.log('I am not here');
}

console.log(calcSum2(2, 2));

// do not do this
function calcSum3(num1, num2) {
    const result = num1 + num2;
    return // has ; after return
    result;
}

console.log(calcSum3(3, 3)); // undefined

// better this variant
function calcSum4(num1, num2) {
    return (num1 < num2
        + num2 && num2
        + num2 + num2 || num2) + 'HELLO';
}

console.log(calcSum4(4, 4));


const age = 17;

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('Батьки дозволили?');
    }
}

// console.log(checkAge(age));


// bad names
function getAge() { // return age?
    alert('u665');
}


// Recursion Рукурсія
let recDepth = 1;

function countdown(i) {
    console.log(`START Depth: ${recDepth}`);
    console.log(i);
    if (i <= 1) {
        return;
    } else {
        recDepth++;
        countdown(i - 1);
    }
    console.log(`END Depth: ${recDepth}`);
}

countdown(3);
// Function stack
// (1) // [1.] console.log(3); [2.] false [3.] countdown(3 - 1) [4.]  recDepth++
// (2) // [1.] console.log(2); [2.] false [3.] countdown(2 - 1) [4.]  recDepth++
// (3) // [1.] console.log(1); [2.] true [3.] return;
// (2) // console.log(`END Depth: ${3}`);
// (1) // console.log(`END Depth: ${3}`);

////////////////////////////////////////////////////////

// Функціональний вираз - Function Expression
// the same but not
function showMessage5() {
    console.log('Hello!');
}

const showMessage6 = function () {
    console.log('Hello!');
};
showMessage6();

// copy function - yes we can
const copyShowMessage5 = showMessage5;
copyShowMessage5();
const copyShowMessage6 = showMessage6;
copyShowMessage6();

// difference


showMessage10(); // before CAN
function showMessage10() {
    console.log('Hello!');
}

showMessage10(); // after CAN

// showMessage11();  // before canNOT
const showMessage11 = function () {
    console.log('Hello!');
};
showMessage11(); // after CAN


// змінна із логікою за межами блоку коду
let someFlexibleFunctionExpression;

if (2 < 1) {
    someFlexibleFunctionExpression = function () {
        console.log('Message 2 is bigger than 1');
    };
} else {
    someFlexibleFunctionExpression = function () {
        console.log('WTH?!');
    };
}
someFlexibleFunctionExpression();


// Arrow function (стрелочние функции) (анонімні функції)
function someSumResultFuncDeclaration(num1, num2) {
    return num1 + num2;
}

const someSumResultFuncExpression = function (num1, num2) {
    return num1 + num2;
};
const someSumResultFuncArrow = (num1, num2) => num1 + num2;
console.log(someSumResultFuncArrow(1, 2));

// one line arrow function
const someSumResultFuncArrow1 = (text, name) => `~[${text}, ${name}!]~`;
console.log(someSumResultFuncArrow1('Hello', 'Denys'));

// multiline line arrow function
const someSumResultFuncArrow2 = (num1, num2) => {
    const result = num1 + num2;
    return result;
}
console.log(someSumResultFuncArrow2(2, 2));

const arrowFuncOneParamOnePar = num1 => console.log(num1);
arrowFuncOneParamOnePar(100);

const arrowFuncOneParamNoPar = () => console.log('No params');
arrowFuncOneParamNoPar();

const arrowFuncOneDefParam = (num1 = '123') => console.log(num1);
arrowFuncOneDefParam();