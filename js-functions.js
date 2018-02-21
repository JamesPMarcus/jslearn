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

