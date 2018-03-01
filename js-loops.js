//loops 

//loops also termed iteration 

//loop features
// a counter - starting point of a loop
//an exit condition - counter reaching a certain value: e.g. have a got enough food?
//iterator - increments the counter by a small amount on each successive loop until it reaches the exit condition

loop(food = 0; foodNeeded = 10) {
  if (food = foodNeeded) {
    exit loop;
    // We have enough food; let's go home
  } else {
    food += 2; // Spend an hour collecting 2 more food
    // loop will then run again
  }
}


//The standard for loop

for (initializer; exit-condition; final-expression) {
  // code to run
}

//initializer, usually a variable set to a number which is incremented to count the number of times the loop has run, also referred to as a counter variable

//exit contiion - defined as when a loop should stop looping

//final expression - evaluated each time the loop has gone full its full iteration, usually increment or decrementation of counter variable

//eg

var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
var info = 'My cats are called ';
var para = document.querySelector('p');

for (var i = 0; i < cats.length; i++) {
  info += cats[i] + ', ';
}

para.textContent = info;

//My cats are called Bill, Jeff, Pete, Biggles, Jasmin,

for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}

//to remove comma 

//Exitng loops with a break

//html

<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>

//js

var contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
  var searchName = input.value;
  input.value = '';
  input.focus();
  for (var i = 0; i < contacts.length; i++) {
    var splitContact = contacts[i].split(':');
    if (splitContact[0] === searchName) {
      para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      para.textContent = 'Contact not found.';
    }
  }
});


//break perforemd if a contact name is found


//Skipping iterations with continue

var num = input.value;

for (var i = 1; i <= num; i++) {
  var sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  para.textContent += i + ' ';
}

//continue statemnt will go on to the next loop without breaking the loop


//While and do while loop

initializer
while (exit-condition) {
  // code to run

  final-expression
}

//similar to for loop except initilaizer variable is set before the loop and the final expression is included inside the loop after the code to run

var i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}


//do while loop 

initializer
do {
  // code to run

  final-expression
} while (exit-condition)

//exit condition comes after everything else wrapped in parentheses. 
    // in a do while, the loop inside the cruly braces is always run once before the check is made. 

    var i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);




//Activity


var output = document.querySelector('.output');
output.innerHTML = '';



for( var i = 10; i >= 0; i --) {
    var para = document.createElement('p'); 
    if ( i ===0) {
	para.textContent = 'Blast Off!';
    } else if (i ===10) {
		para.textContent = 'Countdown ' + i;
	} else {
        para.textContent = i;
    }
output.appendChild(para);
}


var people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
var admitted = document.querySelector('.admitted');
var refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

for ( i = 0; i < people.length; i++) {

	if (i==people.length - 1) {
		 admitted.textContent +=  people[i] + '.';
	}
	else if (i ==4 || i==5) {
		refused.textContent += people[i] + ' '; 
	}
	else {
		 admitted.textContent +=  people[i] + ', ';
	}
}

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';


//Tasks

//What is the last value alerted by this code? Why?

let i = 3;

while (i) {
  alert( i-- );
}

//1


//For every loop, write down which values it shows, in your opinion. And then compare with the answer.

//Both loops alert same values or not?

//The prefix form ++i:

let i = 0;
while (++i < 5) alert( i );

//1, 1, 2, 3, 4
//prefix returns new value 

//The postfix form i++

let i = 0;
while (i++ < 5) alert( i );

//1 2 3 4 5
//postfix returns old value 


//For each loop write down which values it is going to show. Then compare with the answer.

//Both loops alert same values or not?

//The postfix form:

for (let i = 0; i < 5; i++) alert( i );

//The prefix form:

for (let i = 0; i < 5; ++i) alert( i );

//both 01234



//Use the for loop to output even numbers from 2 to 10.

let i = 0;
for (i=0; i<11; i++) {
    if (i % 2 == 0) {
        alert (i);
    }
}



//Rewrite the code changing the for loop to while without altering its behavior (the output should stay same).

 for (let i = 0; i < 3; i++) {
  alert( `number ${i}!` );
}

let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++;
}


//Write a loop which prompts for a number greater than 100. If the visitor enters another number – ask him to input again.

let sum = 0

while (true) {

  let value = +prompt("Enter a number greater than 100", '');

  if (value > 100) {
      sum = value;
      break; // (*)
    
   } else {
        alert('Please enter a number greater than 100');
    }

}
alert( sum );


//Write the code which outputs prime numbers in the interval from 2 to n.

For n = 10 the result will be 2,3,5,7.

P.S. The code should work for any n, not be hard-tuned for any fixed value.

let n = +prompt('Enter number', '');

for (let i = 2; i <=n; i++) {
    
    for (let j = 2; j < i); j++) {
    
        if (j % i == 0); continue;
    }
    
alert(i);
}