//Function expressions and arrows


//function declaration

function sayHi() {
    alert('Hello');
}

//function expression

let sayHi = function (){
    alert('Hello');
};

//copy a function to another variable
function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    //     this still works too (why wouldn't it)

//Function expression requires a semicolon at the end
/*A Function Expression is used inside the statement: let sayHi = ...;, as a value. It’s not a code block. The semicolon ; is recommended at the end of statements, no matter what is the value. So the semicolon here is not related to the Function Expression itself in any way, it just terminates the statement.*/

// Call back functions

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);

//The idea is that we pass a function and expect it to be “called back” later if necessary. In our case, showOk becomes the callback for the “yes” answer, and showCancel for the “no” answer.

//using a function expression 

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
    
    
    //Function Declaration
    function sum(a, b) {
  return a + b;
}


//Function Expression - inside an expression or another syntax construct

let sum = function(a, b) {
  return a + b;
};


//Function declaration can be called earlier than it is defined


sayHi("John"); // Hello, John

function sayHi(name) {
  alert( `Hello, ${name}` );
}

//would not work with a function expression

sayHi("John"); // error!

let sayHi = function(name) {  // (*) no magic any more
  alert( `Hello, ${name}` );
};


//function declaration is only visible inside the code block which it resides..


let age = 16; // take 16 as an example

if (age < 18) {
  welcome();               // \   (runs)
                           //  |
  function welcome() {     //  |
    alert("Hello!");       //  |  Function Declaration is available
  }                        //  |  everywhere in the block where it's declared
                           //  |
  welcome();               // /   (runs)

} else {

  function welcome() {     //  for age = 16, this "welcome" is never created
    alert("Greetings!");
  }
}

// Here we're out of figure brackets,
// so we can not see Function Declarations made inside of them.

welcome(); // Error: welcome is not defined


//using a function expression, welcom() can be initiated outside if function

let age = prompt("What is your age?", 18);

let welcome;

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ok now

/*As a rule of thumb, when we need to declare a function, the first to consider is Function Declaration syntax, the one we used before. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

It’s also a little bit easier to look up function f(…) {…} in the code than let f = function(…) {…}. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason (we’ve seen an example above), then Function Expression should be used.*/

//Arrow Functions

let func = (arg1, arg2, ...argN) => expression

//comparable to

let func = function(arg1, arg2, ...argN) {
  return expression;
}

let sum = (a, b) => a + b;

/* The arrow function is a shorter form of:

let sum = function(a, b) {
  return a + b;
};
*/

alert( sum(1, 2) ); // 3