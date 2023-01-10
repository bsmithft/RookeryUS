var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft panright panup pandown tap press", function(ev) {
  myElement.textContent = ev.type +" gesture detected.";
  console.log(ev.type +" gesture detected.")});

mc.on("panleft", function(ev) {
  console.log(ev.type +" gesture detected.");
    window.navigator.vibrate(50);
});
mc.on("panright", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);

});
mc.on("panup", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);

});
mc.on("pandown", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);

});
mc.on("tap", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
mc.on("press", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});