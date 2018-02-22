//functions

var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
console.log(madeAString);
// the join() function takes an array, joins
// all the array items together into a single
// string, and returns this new string

var myNumber = Math.random();
// the random() function generates a random
// number between 0 and 1, and returns that
// number

//custom draw function

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

//can be invoked by writing
draw();

//functions are inside other functiosn for example random function above

function random(number) {
  return Math.floor(Math.random()*number);
}

//invoking functions

function myFunction() {
  alert('hello');
}

myFunction()
// calls the function once

//Anonymous functions

function() {
  alert('hello');
} //doesn't have a name
//usually used with an event handler

var myButton = document.querySelector('button');

myButton.onclick = function() {
  alert('hello');
}

var myGreeting = function() {
  alert('hello');
}

//can be invoked using 
myGreeting(); 

//can also use the same function in multiple variables

var anotherGreeting = function() {
    alert('hello');
}

myGreeting();
anotherGreeting(); //but don't do this stick to always naming your function.


//Function parameters

var myNumber = Math.random(); // no parameters

var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');

//replace function requires two parameters - the substring to find and the substring to replace

//sometimes parameters are optional

var myArray = ['I', 'love', 'chocolate', 'frogs'];
var madeAString = myArray.join(' ');
// returns 'I love chocolate frogs'
var madeAString = myArray.join();
// returns 'I,love,chocolate,frogs'

//first one specifies a space to join, second one uses a comma by default


//Fucntion scope and conflicts

//each function has its own scope
//top level is called global scope - accessible from everywhere in the code

//Functions inside functions

function myBigFunction() {
  var myValue;

  subFunction1();
  subFunction2();
  subFunction3();
}

function subFunction1() {
  console.log(myValue);
}

function subFunction2() {
  console.log(myValue);
}

function subFunction3() {
  console.log(myValue);
}


//the above example would cause a reference error: myValue is not defined. 

//have to pass the value into the function as a parameter

function myBigFunction() {
  var myValue = 1;
      
  subFunction1(myValue);
  subFunction2(myValue);
  subFunction3(myValue);
}

function subFunction1(value) {
  console.log(value);
}

function subFunction2(value) {
  console.log(value);
}

function subFunction3(value) {
  console.log(value);
}


//Functions

//function declaration

function showMessage() {
    alert('Hello everyone!');
    
}


//calling the function 
showMessage();

//Local variables

//A variable inside a function is only visible inside that function.

function showMessage() {
  let message = "Hello, I'm JavaScript!"; // local variable

  alert( message );
}

showMessage(); // Hello, I'm JavaScript!

alert( message ); // <-- Error! The variable is local to the function


//Outer variables

let userName = 'John';

function showMessage() {
  let message = 'Hello, ' + userName;
  alert(message);
}

showMessage(); // Hello, John



let userName = 'John';

function showMessage() {
  userName = "Bob"; // (1) changed the outer variable

  let message = 'Hello, ' + userName;
  alert(message);
}

alert( userName ); // John before the function call

showMessage();

alert( userName ); // Bob, the value was modified by the function



let userName = 'John';

function showMessage() {
  let userName = "Bob"; // declare a local variable **with let

  let message = 'Hello, ' + userName; // Bob
  alert(message);
}

// the function will create and use it's own userName
showMessage();

alert( userName ); // John, unchanged, the function did not access the outer variable


//global variable 

/*Variables declared outside of any function, such as the outer userName in the code above, are called global.

Global variables are visible from any function (unless shadowed by locals).

Usually, a function declares all variables specific to its task, and global variables only store project-level data, so important that it really must be seen from anywhere. Modern code has few or no globals. Most variables reside in their functions. */

//Parameters

function showMessage(from, text) { // arguments: from, text
  alert(from + ': ' + text);
}

showMessage('Ann', 'Hello!'); // Ann: Hello! (*)
showMessage('Ann', "What's up?"); // Ann: What's up? (**)

/////////////////

function showMessage(from, text) {

  from = '*' + from + '*'; // make "from" look nicer

  alert( from + ': ' + text );
}

let from = "Ann";

showMessage(from, "Hello"); // *Ann*: Hello

// the value of "from" is the same, the function modified a local copy
alert( from ); // Ann


//Default values

function showMessage(from, text = "no text given") {
  alert( from + ": " + text );
}

showMessage("Ann"); // Ann: no text given

//if text parameter is not passed, it will get the value "no text given"

//Returning a value

function sum(a, b) {
  return a + b;
}

let result = sum(1, 2);
alert( result ); // 3

////////////////

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Got a permission from the parents?');
  }
}

let age = prompt('How old are you?', 18);

if ( checkAge(age) ) {
  alert( 'Access granted' );
} else {
  alert( 'Access denied' );
}




function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }

  alert( "Showing you the movie" ); // (*)
  // ...
}

//above funcion is returned without a value


//Naming a function

//start a function with a verbal prefix. e.g.

showMessage(..)     // shows a message
getAge(..)          // returns the age (gets it somehow)
calcSum(..)         // calculates a sum and returns the result
createForm(..)      // creates a form (and usually returns it)
checkPermission(..) // checks a permission, returns true/false

//function should only have one action

//Function == Comments

function showPrimes(n) {
  nextPrime: for (let i = 2; i < n; i++) {

    for (let j = 2; j < i; j++) {
      if (i % j == 0) continue nextPrime;
    }

    alert( i ); // a prime
  }
}

//////////////////

function showPrimes(n) {

  for (let i = 2; i < n; i++) {
    if (!isPrime(i)) continue;

    alert(i);  // a prime
  }
}

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    if ( n % i == 0) return false;
  }
  return true;
}

//second variant is easier to understand


//Tasks

//Rewrite it, to perform the same, but without if, in a single line.

//Make two variants of checkAge:

//Using a question mark operator '?'
//Using OR ||

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Do you have your parents permission to access this page?');
  }
}

function checkAge(age) {
    return (age > 18) ? true : confirm ('Did parents allow you?'); 
}

function checkAge(age) {
    return (age > 18) || confirm ('Did parents allow you?'); 
}

//Write a function min(a,b) which returns the least of two numbers a and b.

function min(a,b) {
    if (a<b) {
        return a;
    } else {
        return b;
    }
}

min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
//also

function min(a, b) {
  return a < b ? a : b;
}



//Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.


function pow(x,n) {
    let x = inum;
    let n = itimes
    alert (x**n);
}

pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...*1 = 1