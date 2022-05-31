var count = 0;

// TODO: Add a comment describing the functionality of the following document.querySelector() methods:
// Creating variables to hold the value of different elements from the page
var incrementEl = document.querySelector('#increment');
var decrementEl = document.querySelector('#decrement');
var countEl = document.querySelector('#count');

// TODO: Add a comment describing the functionality of the following code:
// Sets the countEl element's text content equal to the count variable
function setCounterText() {
  countEl.textContent = count;
}

// TODO: Add a comment describing the functionality of the following event listener:
// Increments the count variable by one and calls the set counter function
incrementEl.addEventListener('click', function() {
  count++;
  setCounterText();
});

// TODO: Add a comment describing the functionality of the following event listener:
// Decrements the count variable by one without decreasing it below 0 and
// calls the set counter function
decrementEl.addEventListener('click', function() {
  // Action will fire if count is greater than  0
  if (count > 0) {
    count--;
    setCounterText();
  }
});
