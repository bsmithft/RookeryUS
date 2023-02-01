var menu1 = document.getElementById('menu1');
var mc = new Hammer(menu1);
mc.get('pinch').set({ enable: true });

var myElement = document.getElementById('myElement');
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

mc.on("pinch", function(ev) {
  console.log(ev.type ="gesture detected.")
});

mc.on("tap", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);

mc.on("press", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);

mc.on("panleft", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);

mc.on("panright", function(ev) {
  console.log(ev.type +" gesture detected.");
  window.navigator.vibrate(30);
  window.location.href='http://maps.apple.com/?lsp=9902&auid=4158007438164491913&sll=38.897517,-77.036542&q=The%20White%20House&hnear=1600%20Pennsylvania%20Ave%20NW,%20Washington,%20DC%2020500-0003,%20United%20States';});

mc.on("panup", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);

mc.on("pandown", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);

