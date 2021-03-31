// For .. of Loop
/*
legend:
    keyword = 'for'
    var = some temp word you use to refer to the current item
    collection = some collection you want to go through ex...Array or Obj or String

NOTE: This is usually better for
arrays and strings if you want the items

<keyword>(<var> of collection){
    //Do something
}
*/
let students = [ 'Amy', '']




let alphabet = 'abcdefghijklmnopqrstuvwxyz'
for (let letter of alphabet){
    console.log(letter)
}

let person = {
    name: 'Shavonne',
    age: 36
}
for (let entry of Object.defineProperties(person)){
    //console.log(property)
    console.log(entry) // A good use of a for in loop
}

for (let [k, v] of Object.defineProperties(person)){
    //console.log(property)
    console.log('${k}: ${v}') // A good use of a for in loop
}