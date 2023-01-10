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
    window.location.href = "http://maps.apple.com/?lsp=9902&auid=4158007438164491913&sll=38.897517,-77.036542&q=The%20White%20House&hnear=1600%20Pennsylvania%20Ave%20NW,%20Washington,%20DC%2020500-0003,%20United%20States"
});
mc.on("panright", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
  window.location.href = "http://maps.apple.com/?lsp=9902&auid=4158007438164491913&sll=38.897517,-77.036542&q=The%20White%20House&hnear=1600%20Pennsylvania%20Ave%20NW,%20Washington,%20DC%2020500-0003,%20United%20States"

});
mc.on("panup", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
  window.location.href = "http://maps.apple.com/?lsp=9902&auid=4158007438164491913&sll=38.897517,-77.036542&q=The%20White%20House&hnear=1600%20Pennsylvania%20Ave%20NW,%20Washington,%20DC%2020500-0003,%20United%20States"

});
mc.on("pandown", function(ev) {
  //myElement.textContent = ;
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(50);
  window.location.href = "http://maps.apple.com/?lsp=9902&auid=4158007438164491913&sll=38.897517,-77.036542&q=The%20White%20House&hnear=1600%20Pennsylvania%20Ave%20NW,%20Washington,%20DC%2020500-0003,%20United%20States"

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
