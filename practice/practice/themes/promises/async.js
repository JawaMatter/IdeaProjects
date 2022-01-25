const doNotRun = false

if (doNotRun) {
// function with async code
    const asyncSetTimeout = () => setTimeout(() => console.log('Simple set timeout function'), 1000)
    asyncSetTimeout()
}

if (doNotRun) {
// async function CAN NOT return data after some time
    const getUserData = () => setTimeout(() => new Object({name: 'Denys', age: 31}), 1000)
    console.log(getUserData())
// getUserData will contain not the object with name Denys but the Timeout object from the setTimeout() function
}

if (doNotRun) {
// to get userData from the setTimeout we need to use the Promise()
    function setTimoutGetDataViaPromise() {
        return new Promise((resolve => setTimeout(() => resolve({name: 'Denys', age: 31}), 1000)))
    }

    setTimoutGetDataViaPromise().then(obj => console.log(obj))
}

// get data from the async function via Promise and async
const getUserDataAsync = () => new Promise(resolve => setTimeout(() => resolve({name: 'Denys', age: 31}), 1000));

async function printUserData() {
    const data = await getUserDataAsync()
    console.log(data)
}

printUserData()