//Arrays 

//Arrays are used to store multiple values in a single variable

let cars = ['Saab', 'Volvo', 'BMW'];


//Creating an Array

var cars = [
    "Saab",
    "Volvo",
    "BMW"
];

//Using the javascript keyword new but don't have to do as it does the exact same thing as above

var cars = new Array('Saab', 'Volvo', 'BMW');

//access the elements

var name = cars[0];

cars[0] = 'Opel'; //modiefies the first elemnt in cars

var cars = ['Saab','Volvo','BMW'];
document.getElementById('demo').innterHTML = cars[0]; //Saab

//Access the full array

var cars = ['Saab', 'Volvo', 'BMW'];
document.getElementById('demo').innerHTML= cars;

//Arrays are special type of objects

//Object
var person = {firstName:'John', lastName:'Doe', age:46};

//array elements can be objects

myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = myCars;

//array properties and methods

var x =cars.length; //the length property returns the number of elements

var y = cars.sort(); //the sort() method sorts arrays

var fruits = ['banana', 'orange', 'apple'];
fruits.length; //length of fruits is 3

//looping array elemnts 

var fruits, text, fLen, i;

fruits = ["Banana", "Orange", "Apple", "Mango"];
fLen = fruits.length;
text = "<ul>";
for (i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}

// <li>Banana</li>......

//Adding array elements

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.push('Lemon');  //adds new elemnt (lemon)

var fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
fruits.[fruits.length]='Lemon';  //adds new elemnt (lemon)

//warning adding elements with high indexes can create undefined holes in array
var fruits = ["Banana", "Orange", "Apple", "Mango"];

fruits[6] = "Lemon";                 // adds a new element (Lemon) to fruits


//associative arrays

//arrays with named indexes are called associative arrays. Javascript only uses numbered indexes.

//e.g. the following will be undefined

var person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
var x = person.length;         // person.length will return 0
var y = person[0];             // person[0] will return undefined


//Difference between arrays and objects

//in javascript, arrays use numbered indexes
//in javascript, objects use named indexes

//when to use arrays. when to use objects?
//use objects when you want the element names to be strings(text)
//use arrays when you want the element names to be numbers

//avoid new Array()
var points = new Array();         // Bad
var points = [];                  // Good 


//How to recognize an array
//typeof operator below will return object
var fruits = ["Banana", "Orange", "Apple", "Mango"];

typeof fruits;             // returns object

//solution 1:

Array.isArray(fruits);     // returns true



