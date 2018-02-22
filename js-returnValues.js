//return values

//return values are values returned by the function when it completes

var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made

//we save the return value of replace() as the newString variable

//to return a value from a custom function the return keyword must be used. 

function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}

//random() takes a whole number and returns a random whole number.

function random(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}

ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
//this line actually reads like the one below
ctx.arc(500, 200, 35, 0, 2 * Math.PI);