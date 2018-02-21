// if else statements 

/*Use if to specify a block of code to be executed, if a specified condition is true
Use else to specify a block of code to be executed, if the same condition is false
Use else if to specify a new condition to test, if the first condition is false
Use switch to specify many alternative blocks of code to be executed*/


//if statment
if (condition) {
    block of code to be executed if the condition is true;
}

if (hour<18) {
    greetings = "Good day";
}

// else statement
if (condition) {
    block of code to be executed if the condition is true 
}
else {
    block of code to be executed if the condition is false

}

if (hour <18) {
    greetiing = "Good day";
}
else {
    greeting = "Good evening";
}


//The else if statement

if (condition1) {
    block of code to be executed if condition1 is true
}
else if (condition2) {
    block of code to be executed if the condition1 is false and condition2 is true
}
else {block of code to be executed if the condition1 is false and condition2 is false }


//Mozilla conditionals 

//basic if...else statment 

if (condition) {
  code to run if condition is true
} else {
  run some other code instead
}


//example
if (condition) {
  code to run if condition is true
}

run some other code

/*However, you need to be careful here — in this case, the second block of code is not controlled by the conditional statement, so it will always run, regardless of whether the condition returns true or false.*/

if (condition) code to run if condition is true
else run some other code instead 

//without curly brackets but not reccomended 

var shoppingDone = false;

if (shoppingDone === true) {
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
}
// shoppingDone is false in this case

//else if 

<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
  
  
  var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  var choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}


      //testing a variable on its own to test wheter it is true or exists 
      
      
      var cheese = 'Cheddar';

if (cheese) {
  console.log('Yay! Cheese available for making cheese on toast.');
} else {
  console.log('No cheese on toast for you today.');
}
      
var shoppingDone = false;

if (shoppingDone) { // don't need to explicitly specify '=== true'
  var childsAllowance = 10;
} else {
  var childsAllowance = 5;
    
    //nesting if...else
    

//ok to nest an if...else statement inside another one (nesting)
    
if (choice ==='sunny') {
    if(temperature <86) {
        para.textContent = 'It is' + temperature + 'degrees outside - nice and sunny.';
    } else if (temperature >=86) {
        para.textContent = 'It is' + temperature + 'degrees outside - REALLY HOT.';
    
    }
}
    
    
    // Logical operators: AND, OR and NOT
    
/* && - AND; allows you to chain together two or more expressions so that all of them have to individually evaluate to true for the whole expression to return true. */
    
    /* OR || allows you to chain two or more expression so that one or more of them have to individuall evaluate true */
    
    if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — nice and sunny. Let\'s go out to the beach, or the park, and get an ice cream.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'It is ' + temperature + ' degrees outside — REALLY HOT! If you want to go outside, make sure to put some suncream on.';
}
    
    
    if (iceCreamVanOutside || houseStatus === 'on fire') {
  console.log('You should leave the house quickly.');
} else {
  console.log('Probably should just stay in then.');
}
    
    
    if (!(iceCreamVanOutside || houseStatus === 'on fire')) {
  console.log('Probably should just stay in then.');
} else {
  console.log('You should leave the house quickly.');
}
    
 if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // run the code
}
    
    
    //always have to complete test on either side of the OR operator. 
    
    
    //switch statements
    

    //switch statements are your friend here — they take a single expression/value as an input, and then look through a number of choices until they find one that matches that value, executing the corresponding code that goes along with it.
    
    switch (expression) {
  case choice1:
    run this code
    break;

  case choice2:
    run this code instead
    break;
    
  // include as many cases as you like

  default:
    actually, just run this code
}
    
    
//switch example
    
    <label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
  
  var select = document.querySelector('select');
var para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  var choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
    
    
//ternary operator
    
    ( condition ) ? run this code : run this code instead
    
    var greeting = ( isBirthday ) ? 'Happy birthday Mrs. Smith — we hope you have a good day' : 'good morning Mrs. Smith';
    
    
    <label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>

var select = document.querySelector('select');
var html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
    

//task 

//Using the if..else construct, write the code which asks: ‘What is the “official” name of JavaScript?’

let off = prompt("What is the official name of Javascript?", "");
    
if (off == "ECMAScript") {
    alert("Right!");
} else {
    alert("Didn't know ECMAScript!");
}
    
    
let number = prompt("Number please", 0);
    if (number > 0) {
        alert (1);
    } else if (number <0) {
        alert (-1);
    } else {
        alert (0);
    }
    
    
let login = prompt("Usernmane", "");
    
if (login =="Admin") {
        let pass = prompt("Password","");
        
          if (pass =="TheMaster") {
        alert ("Welcome!");
    } else if (pass ==null) {
        alert ("Canceled");
    } else {
        alert ("Wrong password");
    }
        
        
}else if (login ==null) {
alert("Canceled");
else {
alert ("I don't know you");
}
    
    
  