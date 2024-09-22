/*
let data;
data = "apple";
console.log('data', data)
*/

// Primitive Data Type
String, Number, Boolean, NaN, null, undefined, Symbol

// Non-Primitive Data Type
Object, Array, Function

/* 
//string
" ", '', `` // any this three types can be used in the string 
let name = "kelvin";
let age = 27;
let gender = 'male';
let isMarried = false;
const PI = 3.14;
let a;
// let total = name + age //! the output shows 'string' because in js "+" sign is used to concatinate the the string and datatype
let total = name / age  // ! the output shows 'number' because in js "/" sign is used to concatinate the the string and datatype
*/

/*
console.log('name', typeof name)
console.log('age', typeof age)
console.log('gender', typeof gender) // the result output is 'number'
console.log('isMarried', typeof isMarried) //the result output is 'boolean'
console.log('PI', typeof PI)
console.log('a', typeof a) // the result output is 'underfined' because the data is not set in the 'a' 
console.log('total', typeof total) 
console.log('total', total) // the result output is 'NaN' because the string and number datatype can't be combine
*/

/*
let Sname = "Kelvin", Sage = 27, Saddress="ygn"
let sayHi = "The name is " + Sname + ", and the age is " + Sage + ", and the address is " + Saddress
console.log('sayHi', sayHi)

// template string 
let sayHello =  `The name is ${Sname}, and the age is ${Sage}, and the address is ${Saddress}`
console.log('sayHello', sayHello)
console.log('==>', sayHello);

let kemail = " kelvin@gmail.com ";
console.log('kemail', kemail.length)

let kemailTrim = kemail.trim();
console.log('kemailTrim', kemailTrim.length)

console.log('kemail', kemail)
*/ 

 /*
slice(start, end)
substring(start, end)
substr(start, length)
*/ 

/*
let  email = "Kelvin@gmail.com";
console.log('email', email.slice(0, 1))
console.log('email', email.slice(0, 2))
console.log('email', email.slice(0, 3))
console.log('email', email.slice(0, 5))
console.log('email', email.slice(1, 5))
console.log('email', email.slice(3, 5))

console.log('email', email.substring(0, 1))
console.log('email', email.substring(0, 2))
console.log('email', email.substring(0, 3))
console.log('email', email.substring(0, 5))
console.log('email', email.substring(1, 5))
console.log('email', email.substring(3, 5))

console.log('email => substr', email.substr(0, 1))
console.log('email => substr', email.substr(0, 2))
console.log('email => substr', email.substr(0, 3))
console.log('email => substr', email.substr(0, 5))
console.log('email => substr', email.substr(1, 5))
console.log('email => substr', email.substr(3, 5))
console.log('email', email)
*/ 
 /*
//string to array
let paragraph = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum, molestiae?";
console.log('paragraph', paragraph.split(" "))
console.log('paragraph', paragraph.split(","))

let email = 'kk@gmail.com';
console.log('email', email.charAt(0).toUpperCase)
console.log('email', email.includes("@"))
console.log('email', email.replace("com","mm")) 
console.log('email', email.replace("gmail","outllook")) 
**/ 

 /** 
//fixed ratio
let total = 122333.444455555
console.log('total', total.toFixed(2))
*/

/*
//string wrting format for html with => " "
let name = "<h1> Kelvin </h1>";
document.write(name);
*/

/**
let list = `<div class="app">
                <ol> 
                    <li> 1 </li>
                    <li> 2 </li>
                    <li> 3 </li>
                    <li> 4 </li>
                </ol> 
            </div>`;
document.write(list);
*/
 /*
let string = '30 Days Of JavaScript'
console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('Days'))       // 3
console.log(string.indexOf('days'))
*/ 

/*
let string = 'you I love can you love.'
console.log(string.lastIndexOf('love'))       // 67
console.log(string.indexOf('you'))        // 63
console.log(string.lastIndexOf('you'))        // 63
console.log(string.lastIndexOf('JavaScript')) // 38
**/ 

let name2 ="nono";
console.log('name2', name2.endsWith("o"))
console.log('name2', name2.endsWith("0"))
console.log('name2', name2.startsWith("n"))
console.log('name2', name2.startsWith("0"))
console.log('name2', name2.concat(" popo"))


let string = 'my language love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))  // ! index