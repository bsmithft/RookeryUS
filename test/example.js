var myElement = document.getElementById('myElement');
var mc = new Hammer(myElement);
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });

mc.on("tap", function(ev) {
  console.log(ev.type +" gesture detected.")});
  window.navigator.vibrate(30);
  window.location.href='www.youtube.com'

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

  function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
  var slideIndex = 1;
  showDivs(slideIndex);
  
  function plusDivs(n) {
    showDivs(slideIndex += n);
  }
  
  function currentDiv(n) {
    showDivs(slideIndex = n);
  }
  
  function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > x.length) {slideIndex = 1}
    if (n < 1) {slideIndex = x.length}
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" w3-opacity-off", "");
    }
    x[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " w3-opacity-off";
    captionText.innerHTML = dots[slideIndex-1].alt;
  }