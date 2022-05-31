var container = document.querySelector(".container");

container.addEventListener("mouseover", function(event) {
  var element = event.target;

  // TODO: Complete function
  if (event.target.matches('div')){
    if (event.target.getAttribute('data-state') === 'hidden'){
      event.target.textContent = event.target.getAttribute('data-number');
      event.target.setAttribute('data-state','visible');
    } else {
      event.target.textContent = '';
      event.target.setAttribute('data-state','hidden');
    }
  }
});
