//Strings

var string = 'The revolution will not be televised.';
string;

//strings always need quotes

var badString = string;
badString;

//badString is now set to have the same value as string.

//can use single or double quotes. choose 1

var bigmouth = 'I\'ve got no right to take my place...'; //use backlash in front of quote
bigmouth;

//Concatenating strings

var response = one + 'I am fine — ' + two;
response;

'front' + 242 //number turned into string

var myString = '123';
var myNum = Number(myString);
typeof myNum; //coverts myString into a number

var myNum = 123;
var myString = myNum.toString();
typeof myString; //converts number to string 

