var timerEl = document.getElementById('countdown');
var mainEl = document.getElementById('main');

var message =
  'Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.';
var words = message.split(' ');

function countdown() {
  var timeLeft = 2;

  // TODO: Add a comment describing the functionality of the setInterval() method:
  // calls the function at the specified interval - 1 second (or 1000 milliseconds) in this case
  var timeInterval = setInterval(function () {
    // TODO: Add comments describing the functionality of the `if` statement:
    // if the timeleft is greater than 1
    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else if` statement:
    // if the time left is equal to 1
    else if (timeLeft === 1) {
      timerEl.textContent = timeLeft + ' second remaining';
      timeLeft--;
    } // TODO: Add comments describing the functionality of the `else` statement:
    // else the time is less than or equal to 0 then it will clear the interval and call
    // the display message function
    else {
      timerEl.textContent = '';
      clearInterval(timeInterval);
      displayMessage();
    }
  }, 1000);
}

// Displays the message one word at a time
function displayMessage() {
  var wordCount = 0;

  // Uses the `setInterval()` method to call a function to be executed every 1000 milliseconds
  var msgInterval = setInterval(function () {
    // If there are no more words left in the message
    if (words[wordCount] === undefined) {
      // Use `clearInterval()` to stop the timer
      clearInterval(msgInterval);
    } else {
      // Display one word of the message
      // console.log(words[wordCount]);
      mainEl.textContent = words[wordCount];
      wordCount++;
    }
  }, 400);
}

setTimeout(function(){
  console.log("Surprise!");
},2000);
countdown();
