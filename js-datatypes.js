//data types

//no error
let message = "hello";
message = 12345;

//this is a dynamically typed language, meaning there are data types, but variables are not bound to any of them.

//different data types:

//a number
let n=123'
n=12.345;

//infinity

alert(1/0); //ifninity
      
alert (infinity); //infinity

//NaN - computational error

alert("not a number" / 2); //NaN
//if there is a NaN anywere in the operation, it propogates the whole result

//String

//must be quoted

let str= "hello";
let phrase = `can embed ${str}`; //backticks allow us to embed variables into a string by wrapping in ${}.

alert(`the result is ${1 +2}`); // the result is 3

//A boolean (logical type)

//true and false only

let nameFieldChecked = true; //yes, name field is checked


// null value

let age = null;

//null is reference to a non-existing object

//undefined value - i.e. value not assigned

let x;
alert(x); //shows "undefined"

let x= 123;
x= undefined;
alert (x); //"undefined"

//null should be usded to write an 'unknown variable'

//objects and symbols

//objects are used to store collections of data, symbol is used to crate unitqe idintifiers for objects

//typeof operator

//returns type of argument

//operator: typeof x
//function style : typeof(x)

typeof "foo" //"string"
typeof alert //"function"

//Task

//What is the output of the script?
let name = "Ilya";

alert( `hello ${1}` ); // hello 1

alert( `hello ${"name"}` ); // hello name

alert( `hello ${name}` ); // hello Ilya



