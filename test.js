var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

// listen to events...
mc.on("panleft", function(ev) {
    //myElement.textContent = ;
    console.log(ev.type +" gesture detected.");
    window.navigator.vibrate(50);
    window.location.href = "https://www.google.com"
});
mc.on("panright", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
mc.on("panup", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
mc.on("pandown", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
mc.on("tap", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
mc.on("press", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
});
hammerTime.on('panleft', () => {
    window.location.href = "https://www.google.com"
  })
hammerTime.on("swiperight", () => {
    window.location.href = "https://www.youtube.com"
  })