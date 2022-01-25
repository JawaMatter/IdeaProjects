console.log('Hello!');
console.log('Hello!');
console.log('Hello!');
console.log('Hello!');
console.log('Hello!');


// while (true /* умова */) {
//     // some code - тіло циклу
//     console.log('Hello!');
// }

let i = 0;
while (i < 3) { // 0 < 3  // true
    console.log(`variable i: ${i}`);
    i++;
}
// 3 < 3 false

let y = 3
while (y !== 0) console.log(`variable y: ${y--}`);
// while (y !== 0) console.log(`variable y:`);

let z = 3
while (z !== 0) console.log(`variable z: ${z -= 1}`);
// while (z !== 0) console.log(`variable z: ${z = z - 1}`);
// while (z !== 0) console.log(`variable z: ${--z}`);

// z == 3
// z + 10 = 13 // console 13
// (z !== 0) // 13 !== 0 true //console 23


do {
   // code here at least 1 time
} while (false /*condition*/)


let v = 1;
do {
   console.log('At least 1 time')
} while (v === 0);


let c = 1;
do {
   console.log('At least c 1 time');
   c--;
} while (c === 0);





// FOR
for (/*начало*/;/*умова*/;/*крок*/) {
    // тіло цикла
    break;
}

for (let b = 10; b >= 0; b--) {
    console.log(b)
}

for (let w = 2.5; w !== 15; w += 0.5) { // c = c + 0.5
    console.log(w);
    // w -= 0.5;
}
// console.log(`c is ${w}`); cannot see
// console.log(0.1+0.2); // 0101010100101010101 1456    00-0 01-1 10-2 11-3


let r = 10;
for (; r >= 0; r--) {
    console.log('R' + r);
}
console.log('R' + r);


let t = 10;
for (; t >= 0;) {
    console.log('T' + t);
    t--;
}
console.log('T' + t);


for (let j = 0; j < 10; j++) {
    console.log('J:' + j);
    if (j === 5) break;
}


for (let u = 0; u < 10; u++) {
    if (u%2) continue;
    console.log(`u ${u} is even!`);
}
console.log(0%2, Boolean(0%2));
console.log(1%2, Boolean(1%2));
console.log(2%2, Boolean(2%2));
console.log(3%2, Boolean(3%2));




for (let o = 0; o < 10; o++) {
    if (o === 5) continue;
    console.log(`o ${o}`);

    // (o === 6) ? break : continue;
}


// if () {
//     if () {
//         if () {
//
//         }
//     }
// }

console.log('////////////////////////////////')
for (let m = 0; m < 3; m++) {
    console.log(`M:` + m);
    for (let f = 3; f > 0; f--) {
        console.log(`F:` + f);
    }
}

console.log('////////////////////////////////')
for (let mm = 0; mm < 3; mm++) {
    console.log(`Mm:` + mm);
    for (let ff = 3; ff > 0; ff--) {
        console.log(`Ff:` + ff);
        break; // or continue
    }
    break; // or continue
}

console.log('////////////////////////////////')
breakHereMitya: for (let mmm = 0; mmm < 3; mmm++) {
    console.log(`Mmm:` + mmm);
    for (let fff = 3; fff > 0; fff--) {
        console.log(`Fff:` + fff);
        break breakHereMitya; // or continue
    }
}

console.log('////////////////////////////////')
breakHereVasia: for (let mmmm = 0; mmmm < 3; mmmm++) {
    console.log(`Mmmm:` + mmmm);
    for (let ffff = 3; ffff > 0; ffff--) {
        console.log(`Ffff:` + ffff);
        continue breakHereVasia;
    }
}












