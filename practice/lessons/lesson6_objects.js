let variables = 'some data';
variables = 10;

let newObject = new Object(); // constructor;
let newObjectViaLiteral = {}; // object literal;

// властивості обʼєкта: name: 'Denys', age: 31
let userInfo = {
    name: 'Denys', // name - ключ (імʼя, ідентифікатор)
    age: 31, // 31 - значення
    // , в кінці не обовязкова - мобільна кома
}

// виведення властивостей
console.log(userInfo); // { name: 'Denys', age: 31 }
console.log(userInfo.age); // 31

// NAMES
let userInfo1 = {
    name: 'Denys',
    вік: 31, // не варто
    lowerCamelCase: true,
    'few words': 'yes some words here',
    someObj: {},
    array: [],
    function: () => console.log()
}
console.log(userInfo1['few words']); // yes some words here


// Вичеслення імені

const outerKey = 'outer';
let userInfo2 = {
    name: 'Denys',
    age: 31,
    [outerKey]: 'ONLY outer',
    [outerKey + ' inner']: 'outer + inner',
    // `no`: CANNOT BE USED,
}
console.log(userInfo2[outerKey]);
console.log(userInfo2['outer']);

console.log(userInfo2[outerKey + ' inner']);
const lifeHack = `${outerKey} inner`
console.log(userInfo2[lifeHack]);
console.log(userInfo2['outer inner']);

// reserved words can be used
let userInfo3 = {
    for: true,
    let: true,
    return: true,
}

// and numbers too
let userInfo4 = {
    0: 'yes it is',
}
console.log(userInfo4["0"]); // yes it is
console.log(userInfo4[0]); // yes it is
// console.log(userInfo4.0); // DO NOT USE


// Symbol - data type
const id = Symbol('id');
const idAsNum = Symbol(123);
const someId = id;
let userInfo5 = {
    name: 'Denys',
    age: 31,
    [id]: 'Some secret data',
    [idAsNum]: 'Some secret data as num',
}
console.log(userInfo5.id); // undefined
console.log(userInfo5['id']); // undefined
console.log(userInfo5[someId]); // Some secret data
console.log(userInfo5[idAsNum]); // Some secret data as num


// вкладеність
let userInfo6 = { //
    name: 'Denys',
    age: 31,
    address: {
        city: 'Uman',
        street: 'Rapshan',
        someData: {
            embed: true
        }
    }
}


// створення обʼєктів функцією
function makeObject(name, age) {
    return {
        name: name,
        age: age,
    }
}

const createdObject = makeObject('Mitya', 25);
console.log(createdObject); // { name: 'Mitya', age: 25 }

// SIMPLE
function makeObjectSimple(name, age) {
    return {name, age, "two words": true}
}

const createdSimpleObject = makeObject('Mitya', 25);
console.log(createdSimpleObject); // { name: 'Mitya', age: 25 }


function makeUserInfo(name, age, customKey, customValue) {
    return {
        name, // Тоже самое что и  name: name,
        age,// Тоже самое что и  age: age,
        "likes javascript": true,
        customKey: customValue,
        // `reverse quotation`: false, // зворотні кавички заборонено тому і без інтерполяції
        [customKey + customKey]: customValue + customValue,
        [customKey + customValue]: customValue + customValue,
        [customKey + customValue]: customValue + customValue,
        // ...другие свойства
    };
}

let user = makeUserInfo("Вася", 30, 'someKey', 'someValue');
let user2 = makeUserInfo("Вася", 30, 'someKey', 0);
let user3 = makeUserInfo("Вася", 30, 1, 0);
console.log(user); //
console.log(user2); //
console.log(user3); // ??????????????????
console.log(user.someKeysomeKey);
console.log(user['someKeysomeKey']);


// додання властивостей до обʼєкта
const simpleObject = {name: 'Jun'};
console.log(simpleObject); // { name: 'Jun' }
console.log(simpleObject.name); // Jun

simpleObject.age = 18;
console.log(simpleObject); // { name: 'Jun', age: 18 }
console.log(simpleObject.age); // 18

simpleObject['loves java script'] = true;
console.log(simpleObject); // { name: 'Jun', age: 18, 'loves java script': true }
console.log(simpleObject['loves java script']); // true

simpleObject.address = {city: 'Ryjyn', street: 'Kyivska'}
console.log(simpleObject); // { name: 'Jun', age: 18, 'loves java script': true, address: { city: 'Ryjyn', street: 'Kyivska' }}
console.log(simpleObject.address); // { city: 'Ryjyn', street: 'Kyivska' }

// ви-додання (видалення)

const thisIsTanya = {name: 'Tanya', cat: true, 'dva slova': 'slova dva'}
console.log(thisIsTanya); // { name: 'Tanya', cat: true }
delete thisIsTanya.cat;
console.log(thisIsTanya); // { name: 'Tanya' }
delete thisIsTanya['dva slova'];
console.log(thisIsTanya); // { name: 'Tanya' }
// thisIsTanya = null; // cannot 'cause'

// delete reference
let canBeNulled = {some: 'some'};
canBeNulled = null;


// змі-дання (зміна властивостей)
const oksana = {name: 'Oksaana', cat: 'two', 'only silence': 'shos` clasne'}
oksana.cat = 2;
oksana['only silence'] = 'Muhr-Purr';


console.log('////////////////////////////////////////////////////');
// Копіювання обʼєктів
const originalLink = {name: "ORIGINAL", age: 30} //
const copiedLink = originalLink;
console.log(originalLink); // { name: 'ORIGINAL', age: 30 }
// change only 'copy'
copiedLink.name = 'COPY';
console.log(originalLink); // { name: 'COPY', age: 30 }
console.log(copiedLink);  // { name: 'COPY', age: 30 }

// primitive types
let one = 1;
let two = one;
console.log(two);
one = 3
two = 5;
console.log(one);
console.log(two);

// Дублювання обʼєктів Object.assign()   // Object
const originalObject = {name: "Original Object", age: 30} //
//Object.assign(куда(объект), что(свойство #1), что(свойство #2), ...);
const copiedObject = Object.assign({}, originalObject);
const exampleOfObjCreation = Object.assign(new Object(), originalObject);
console.log(originalObject);
console.log(copiedObject);
originalObject.name = 'Dmytro!!!!';
copiedObject.name = 'Oko';
console.log(originalObject);
console.log(copiedObject);

console.log('/////////////////')
const emptyObj = {};
const userInfo9992Copy = Object.assign(emptyObj, originalObject);
console.log(emptyObj);
console.log(userInfo9992Copy);

console.log('/////////////////')
const userInfo99912 = {name: "Вася!!!!", age: 30} //
const emptyObj1 = {};
Object.assign(emptyObj1, userInfo99912);
console.log(emptyObj1);

////////////////////////////
const try1 = {name: "Уася", age: 30};
const try2 = try1;

// try1 and try 2 = {name: "Уася", age: 30};

try2.name = "Вася еген";
console.log(try1); // { name: 'Вася еген', age: 30 }
console.log(try2); // { name: 'Вася еген', age: 30 }

//////////////
const try3 = Object.assign({}, try1);
console.log(try3); // { name: 'Вася еген', age: 30 }
try3.name = "CHANGED";
console.log(try3); // { name: 'CHANGED', age: 30 }
console.log(try1); // { name: 'Вася еген', age: 30 }

///////////////////////////////////
const addNewProps = {name: "Уася", age: 30};
Object.assign(addNewProps, {isAlive: true});
console.log(addNewProps);

const objInVar = {isAlive: true, address: 'street', updated: 999};
const addNewProps1 = {name: "Уася", age: 30, updated: 100};
Object.assign(addNewProps1, objInVar);
console.log(addNewProps1); // updated: 999

// few objects
const willBeCopied1 = {1: 1, 2: 2};
const willBeCopied2 = {3: 3, 4: 4};
const willBeCopied3 = {5: 5, 6: 6};
const willBeCopied4 = {isUpdated: true};
const willBeCopiedIn = {isUpdated: false}
Object.assign(willBeCopiedIn, willBeCopied1, willBeCopied2, willBeCopied3, willBeCopied4);
console.log(willBeCopiedIn); // { '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, isUpdated: true }


// Перевірка існування властивостей
let userMitya = {
    name: "Mitya",
    // age: 30
    undefinedKey: undefined
}
console.log(userMitya.age); // undefined
console.log(userMitya.undefinedKey); // undefined

if (!userMitya.age === undefined) {
    console.log('NOTHING IS HERE!');
}

// Опційний ланцюжок / Опциональная цепочка - “?.” оператор
let userMityaOptionalChain = {
    name: "Mitya",
    // address: {
    //     street: 'some street'
    // }
}
// console.log(userMityaOptionalChain.address.street); //  'some street' // TypeError: Cannot read properties of undefined (reading 'street')
console.log(userMityaOptionalChain?.address?.street); // undefined


// Оператор in
let userJune = {
    name: "June",
    // doestNotExist: false
    // address: {
    //     street: 'some street'
    // }
}
console.log('name' in userJune); // true
console.log('doestNotExist' in userJune); // false
if (!('patronymic' in userJune)) {
    userJune.patronymic = 'Batskivna';
}
console.log(userJune); // { name: 'June', patronymic: 'Batskivna' }

const outerNameKey = 'name';
console.log(outerNameKey in userJune); // true


console.log('//////////////////////////')
// Цикл for in - спеціально для обʼєктів
let dog = {
    name: "Warrior",
    age: 300,
    address: {
        city: "Mars",
        street: "Freedom",
    }
}
for (const dogKey in dog) {
    console.log(dogKey);
}
// name
// age
// address

// THE SAME
// const dogKeys = Object.keys(dog);
// console.log(dogKeys); // [ 'name', 'age', 'address' ]
// for (let i = 0; i < dogKeys.length; i++) {
//     console.log(dogKeys[i]);
// }

let cat = {
    name: "Shadow",
    age: 1,
    address: {
        city: "Earth",
        street: "Slave",
    }
}
for (const catKey in cat) {
    console.log(catKey);
    console.log(cat[catKey]);
}
// name
// Shadow
// age
// 1
// address
// { city: 'Earth', street: 'Slave' }


for (const catKey in cat) {
    console.log(`${catKey}: ${cat[catKey]}`);
}
// name: Shadow
// age: 1
// address: [object Object]

// Перетворення обʼєкта в стрінгу [object Object]
console.log(cat.address); // { city: 'Earth', street: 'Slave' }
console.log(`${cat.address}`); // [object Object]
console.log(String(cat.address)); // [object Object]


////////////////////////////// Функція в обʼєкті (метод)

const userJohn = {name: "Джон", age: 30};
console.log(userJohn); // { name: 'Джон', age: 30 }

// function declaration
function hello() {
    console.log('Hello all!');
}

userJohn.hello = hello;
console.log(userJohn); // { name: 'Джон', age: 30, hello: [Function: hello] }
userJohn.hello(); // Hello all!

// expression
const bye = function () {
    console.log('Bye!')
}
userJohn.bye = bye;
console.log(userJohn); // { name: 'Джон', age: 30, hello: [Function: hello], bye: [Function: bye] }
userJohn.bye(); // 'Bye!'

// arrow
const dream = () => console.log('Dream of California!');
userJohn.dream = dream;
console.log(userJohn); // { name: 'Джон', age: 30, hello: [Function: hello], bye: [Function: bye], dream: [Function: dream] }
userJohn.dream(); // Dream of California!

// {name: "Джон", age: 30}
// { name: 'Джон', age: 30, hello: [Function: hello], bye: [Function: bye], dream: [Function: dream] }


const userJohnWildExpression = { // DECLARATION or EXPRESSION?
    name: "Джон Wild",
    shoot: function () {
        console.log('Tsh tsh tsh tsh tshshshshs!')
    }
};
// shot is - METHOD
userJohnWildExpression.shoot(); // Tsh tsh tsh tsh tshshshshs!


const userMoonArrow = {
    name: "Moon",
    shine: () => console.log('Shine ur back!')
};
userMoonArrow.shine(); // Shine ur back!


// USING OWN PROPERTIES
const clouds = {
    water: 5000,
    hasWater: function () {
        console.log(`Clouds has water amount: ${clouds.water}`)
    }
};
clouds.hasWater(); // Clouds has water amount: 5000

// USING OWN PROPERTIES with THIS
const cloudsUnique = {
    water: 51000,
    hasWater: function () {
        console.log(`Clouds has water amount: ${this.water}`)
    }
};
cloudsUnique.hasWater(); // Clouds has water amount: 51000





















