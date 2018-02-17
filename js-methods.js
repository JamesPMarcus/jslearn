//String Methods


var txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var sln = txt.length; //returns length of string 

var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate"); // returns index of first occurence of specified text. 7 in this case

var str = "Please locate where 'locate' occurs!";
var pos = str.lastIndexOf("locate"); // returns index of last occurence of specified text. 21 in this case. 


var str = "Please locate where 'locate' occurs!";
var pos = str.indexOf("locate",15); //15 is start position for search. Answer is 21

var str = "Please locate where 'locate' occurs!";
var pos = str.search("locate"); //returns 7

//The search() method cannot take a second start position argument.
//The indexOf() method cannot take powerful search values (regular expressions).

//Extracting string parts

//Slice method extracts and retunrs extracted part as a new string 

var str = "Apple, Banana, Kiwi";
var res = str.slice(7, 13); //Banana

var str = "Apple, Banana, Kiwi";
var res = str.slice(-12, -6); //can also include negative indexes Banana 

//substring() method similar to slice but cannot accept negative indexes

//substr() Method

var str = "Apple, Banana, Kiwi";
var res = str.substr(7, 6); //second parameter specifies the length of the extracted part. Banana is 6 characters

//Replace string content 

str = "Please visit Microsoft!";
var n = str.replace("Microsoft", "W3Schools");
// Microsoft replaced with W3Schools, only first match and case sensitive 

//Converting to upper and lower case

var text1 = "Hello World!";       // String
var text2 = text1.toUpperCase();  // text2 is text1 converted to upper

var text1 = "Hello World!";       // String
var text2 = text1.toLowerCase();  // text2 is text1 converted to lower

//concat() method

var text1 = "Hello";
var text2 = "World";
var text3 = text1.concat(" ", text2); //Hello World

//extracting string characters
//charAt(position)
//charCodeAt(position)

//charAt() Method

var str = "HELLO WORLD";
str.charAt(0);            // returns H

//charCodeAt() Method

var str = "HELLO WORLD";

str.charCodeAt(0);         // returns 72 the unicode

//do not access a string as an array, convert a string to an array first

//Use split method to convert

var txt = "a,b,c,d,e";   // String
txt.split(",");          // Split on commas
txt.split(" ");          // Split on spaces
txt.split("|");          // Split on pipe

var txt = "Hello";       // String
txt.split("");           // Split in characters
//array will be split into characters 
//H  e l l o




