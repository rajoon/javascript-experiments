var colorPicker = function(){
  var number = Math.random();
  if (number <= 0.2) { //if Math.random outputs a number less than or equal to 0.2 return red
    return 'red';
  }
  else if (number <= 0.4){
    return 'blue';
  }
  else if (number <= 0.6){
    return 'green';
  }
  else if (number <= 0.8){
    return 'yellow';
  }
  else{
    return 'black';//if Math.random doesn't output either of these return black
  }
}

var randomThoughts = function() {
  switch (colorPicker()) { //if this evaluates to "color", the program matches the value with case "color" and executes the statement.
  case "red":
    console.log('%c Oh my heavens! ','color: red; font-size: '+Math.round(Math.random()*50)+'px;');
    break;
  case "blue":
    console.log('%c Hello World', 'color: blue; font-size: '+Math.round(Math.random()*50)+'px;');
    break;
  case "green":
    console.log("%c What's up?", 'color: green; font-size: '+Math.round(Math.random()*50)+'px;');
    break;
  case "yellow":
    console.log('%c Build Things', 'color: yellow; font-size: '+Math.round(Math.random()*50)+'px;');
    break;
  case "black":
    console.log('%c Invent Anything!', 'color: black; font-size: '+Math.round(Math.random()*50)+'px;');
    break;
  default:
    console.log("Sorry, i'm are out of " + colorPicker + "options.");
  }
}

var stopMyThoughts = function() { //defining stopMyThoughts
  clearInterval(myIntervalTimer);
}

var myIntervalTimer = setInterval(randomThoughts , 10); // Runs once every 10 milliseconds.

setTimeout(stopMyThoughts, 1000 * 30); //after 30 seconds stop
