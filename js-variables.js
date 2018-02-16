//js-variables.js 

let message; //let keyword declares the variable 'message'

message= 'hello'; //string stored

alert(message); //shows 'hello'

let message = 'Hello!'; // define the variable and assign the value can do both at same time

alert(message); // Hello!

let user = 'John', age = 25, message = 'hello'; //multiple variables in one line

var message ='hello'; //subtle differences between let and var


//changing variable value
let message;

message = 'Hello!';

message = 'World!'; // value changed

alert(message); //World

let hello = 'Hello world!';

let message;

// copy 'Hello world' from hello into message
message = hello;

// now two variables hold the same data
alert(hello); // Hello world!
alert(message); // Hello world!

//non workable names
let 1a; // cannot start with a digit

let my-name; // a hyphen '-' is not allowed in the name

//old scripts didn;t need to create a variable, variables were created with mere assignment

//still works if you don't 'use strict', see below
//bad practice always declare a variable

"use strict";

num = 5; // error: num is not defined


//constants- unchanging variables

const myBirthday = '18.04.1982';

myBirthday = '01.01.2001'; // error, can't reassign the constant!

//uppercase constants used for harrd to remember values

const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// ...when we need to pick a color
let color = COLOR_ORANGE;
alert(color); // #FF7F00

//Tasks

//Declare two variables: admin and name.
let admin;
let name;

//Assign the value "John" to name.

name = 'John';

//Copy the value from name to admin.

admin = name;

//Show the value of admin using alert (must output “John”).

alert(admin); //'John'

//Create the variable with the name of our planet. How would you name such a variable?

let ourPlanetName='Earth';


//Create the variable to store the name of the current visitor. How would you name that variable?

let currentnewUser = "Jay";