let name1 = 'Mitia' // can be updated
const name2 = 'Oksana' // can NOT be updated
// const, let - ключові слова
// name1 - variable змінна
// = оператор присвоєння
// 'string'

// one line commentary

/*
multi line commentary
 */

/**
 * JSDoc - java script documentation
 */

//---------------------------------------------------------
const stringSingle = 'string data type in single quotes'
const stringDouble = "string data type in double quotes"
const stringReverse = `string data type in reverse quotes`

// логічний тип даних. лише два значення
const booleanTrue = true
const booleanFalse = false

// Number
const integer = 900719954740991
const float = 123123.12123123
const bigInt = 1231223452345234523452345234523453123123132n

// Object
const objectEmpty = {}
// const constructorObject = new Object()
const objectVar = {name: 'Denys'}
const objectVars = {
    name: 'Denys', // name - key, 'Denys' - value
    age: 31,
    isMale: true
}

// console.log(objectVars.age) // printing value
// console.log(objectVars.age = 32) // updating value
// objectVars.age = 32 // updating value
// console.log(objectVars.hasOwnApartment = false) // adding new key and value
// delete objectVars.name
// console.log(objectVars);


// Primitive program browser 1
// let userName = prompt('What is your name?')
// let message = `Hello, World! My name is ${userName}!`
// alert(message)


// undefined
let notDefined
let notDefinedVisual = undefined
// console.log(notDefined)
// console.log(notDefinedVisual)

// null
let nullVar = null
// console.log(nullVar)

// NaN
let notANumber = NaN
let userResult = 'String'
let userResultNum = 123
// console.log(isNaN(userResultNum));

// console.log(typeof null)


// Array []
// let firstArr = new Array()
const array = ['some', {}, NaN, undefined, true, 41, 42.42, [], null]
console.log(array);
