// var, let, const

//var is a global variable
var a = "apple";
var catName = "meow";
console.log('catName', catName)
{
    var a = "banana";
    // console.log('a',a)
}
console.log('a',a)

//let
let fruits = "apple";
fruits = 1
console.log('outside fruits',fruits)
// outside variable can be used in scope console log
{
    //scope 
    let fruits = "orange";
    let vegetable = "carrot"; //  the scope vaiable defie can't work in outside console log
    console.log('scope fruits',fruits)
}
vegetable = 2 //need to define variable
console.log('vegetable',vegetable)

//const
const PI = 3.14;
// PI = 200; can't change the data
console.log('PI', PI)

const PORT = 3000;
console.log('PORT', PORT)

const animals = ['cat', 'dog', 'parrot']
// animals ="cow"; can't change the array type to string type while using const variables 
console.log('animals', animals)