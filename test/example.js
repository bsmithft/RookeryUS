var sw42name = document.getElementById('sw42name');
var mc = new Hammer(sw42name);
var sw42menu = document.getElementById('sw42menu');
var mc = new Hammer(sw42menu);
var sw42hours = document.getElementById('sw42hours');
var mc = new Hammer(sw42hours);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

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

