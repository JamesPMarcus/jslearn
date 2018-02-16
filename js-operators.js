let x = 1;

x=-x;
alert(x); //-1 unary negation was applied

let x = 1, y = 3;
alert( y - x ); // 2, binary minus subtracts values

///////////////////////

let s = "my" + "string";
alert(s); //mystring

alert('1' + 2); //"12"
alert(2 +'1'); //"21"

alert(2-'1'); // 1 
alert('6'/'2') //3  converts strings to numbers when + operand is not used

//  + operand Converts non-numbers 
alert( +true ); // 1
alert( +"" );   // 0

let apples = "2";
let oranges = "3";

// both values converted to numbers before the binary plus
alert( +apples + +oranges ); // 5

et x = 2 * 2 + 1;

alert( x ); // 5


alert( 5 % 2 ); // 1 is a remainder of 5 divided by 2

alert( 2 ** 2 ); // 4  (2 * 2)


let counter = 2;
counter++;      // works the same as counter = counter + 1, but is shorter
alert( counter ); // 3


//increment prefix/postfix form

let counter =1;
let a = ++counter; // prefix
alert(a); // 2

let counter = 1;
let a = counter++//postfix
alert(a); //1

//modify in place
let n = 2;
n += 5; // now n = 7 (same as n = n + 5)
n *= 2; // now n = 14 (same as n = n * 2)

alert( n ); // 14

//comma, only last expression is returned

let a = (1 + 2, 3 + 4);

alert( a ); // 7 (the result of 3 + 4)



//Task
//What are the final values of all variables a, b, c and d after the code below?

let a = 1, b = 1;

let c = ++a; // a=2, c=2
let d = b++; // b=1, d=1

//What are the values of a and x after the code below?

let a = 2;

let x = 1 + (a *= 2);

//a=4
x=5

