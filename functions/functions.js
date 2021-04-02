// name(data) => data out
// f(x) = x * x // sqr function
/*
Way one:
<keyword> <yourName>(what I need to work){
// What I do
    return <something>// what I want to give back
}
*/

// Two ways to write a function in js
function sqr(x){
    return x * x
}

console.log(sqr(5))

let aSqr = (x) => {
    return x * x // Explicit Return
}

let bSqr = (x) => x * x
let cSqr = x => x * x // Implicit Return

function greet(){ // This needs no parameters to work
    console.log("Hello world")
}

greet()
function betterGreet(fName){ // This is a one parameter function
    console.log("Hello " + fName)
}
betterGreet("Shavonne") // Passes in one argument

let createFullName = (fName, lName) => `${fName} ${lName}`
let fullName = createFullName("Shavonne", "Holton")
console.log(fullName)