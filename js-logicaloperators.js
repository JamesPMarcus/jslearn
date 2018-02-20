//logical operators 

//There are three logical operators in JavaScript: || (OR), && (AND), ! (NOT).

// || (OR Operator)

result = a || b;


//with boolean values
alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert( false || false ); // false


//numbers converted to boolean 

if (1 || 0) { // works just like if( true || false )
  alert( 'truthy!' );
}

//most of the time, || use in an if statement to test if any of the given conditions is correct.

let hour = 9;

if (hour < 10 || hour > 18) {
    alert('The offic is closed.');
}

let hour = 12;
let isWeekend =true;

if (hour < 10 || hour > 18 || isWeekend) {
    alert('The office is closed.'); //weekend
    
}

reult = value1 || value2 || value3;
/* evaluate operands from left to right. For each operand, convert it to boolean. If the result is true then stop and return the original value of that operand. If all other operands have been assessed (.i.e. falsy, return the last operand). Value is returned in original form without the conversion*/

alert(1||0); // 1 is truthy
alert (true || 'no matter what'); //(true is truthy)
alert (null || 1); //1 
alert(undefined || null || 0); // 0 (all falsy, returns the last value)

// can us OR to get the first truthy value from the list of variables:

let currentUser = null;
let defaultUser = "John";

let name = currentUser || defaultUser || "unnamed";

alert( name ); // selects "John" – the first truthy value

//short-circuit evaluation

//operands can also be expressions. OR tests them from left to right and stops when a truthy value is reached. e.g

let x;

true || (x=1);
alert(x); //undefined, because (x=1) not evaluated. true evalueted first

let x;

false || (x = 1);
alert (x); //1 as x evaluated as first truth

//&&(AND)

result = a && b;

// AND returns true if both operands are truthy, it is false otherwise

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false


let hour = 12;
let minute = 30;

if (hour ==12 && minute == 30) {
    alert ('Time is 12:30');
}

//any value is allowed as an operand of AND:

if (1 && 0) {//evaluate as true && false
    alert("won't work, because result is falsy");
}

//AND seeks the first falsy value

result = value1 && value2 && value3;

/*The AND "&&" operator does the following:

Evaluate operands from left to right.
For each operand, convert it to a boolean. If the result is false, stop and return the original value of that operand.
If all other operands have been assessed (i.e. all were truthy), return the last operand.

**The rules above are similar to OR. The difference is that AND returns the first falsy value while OR returns the first truthy one.*/

// if the first operand is truthy,
// AND returns the second operand:
alert( 1 && 0 ); // 0
alert( 1 && 5 ); // 5

// if the first operand is falsy,
// AND returns it. The second operand is ignored
alert( null && 5 ); // null
alert( 0 && "no matter what" ); // 0


//AND && execute before OR ||

//The precedence of the AND && operator is higher than OR ||, so it executes before OR.

In the code below 1 && 0 is calculated first:
alert( 5 || 1 && 0 ); // 5

let x = 1;

(x > 0) && alert( 'Greater than zero!' );

//an analogue for

let x = 1;

if (x > 0) {
  alert( 'Greater than zero!' );
}

//!(NOT)

result = !value;

/*The operator accepts a single argument and does the following:

Converts the operand to boolean type: true/false.
Returns an inverse value.*/

alert( !true ); // false
alert( !0 ); // true

//can use double NOT !! or Booleon function

alert( Boolean("non-empty string") ); // true
alert( Boolean(null) ); // false


//Task

//What the code below is going to output?

alert( null || 2 || undefined ); //2 first truthy value

//What the code below will output?

alert( alert(1) || 2 || alert(3) );// 1 and 2 alert returns undefined so it goes to 2 which is truthy and stops 

//What this code is going to show?

alert( 1 && null && 2 ); null //first falsy

//What will this code show?

alert( alert(1) && alert(2) ); // shows 1 then alert is undefined which is falsy. so 1 and undefined 

What will be the result?

alert( null || 2 && 3 || 4 ); // 3.   && executes first. result of 2 && 3 = 3. 3 becomes the first truthy value. 

//Write an “if” condition to check that age is between 14 and 90 inclusively.

//“Inclusively” means that age can reach the edges 14 or 90.

let age 34

if (age >=14 && age <=90){
alert(age);

}


//Write an if condition to check that age is NOT between 14 and 90 inclusively.

//Create two variants: the first one using NOT !, the second one – without it.


if (age !>=14 && !<= 90)

if (age <14 || >90)


//Which of these alerts are going to execute?

//What will be the results of the expressions inside if(...)?

if (-1 || 0) alert( 'first' ); // runs -1 || 0, truthy 
if (-1 && 0) alert( 'second' ); //no run -1 && 0 =0 falsy
if (null || -1 && 1) alert( 'third' ); //third 
//gives nul || 1 = 1, truthy. 



