// grab the element
var el = document.getElementById('idOfElement');

// listen for the long-press event
el.addEventListener('long-press', function(e) {

  // stop the event from bubbling up
  e.preventDefault()
  navigator.vibrate(50);
  console.log(e.target);
});