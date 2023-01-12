var myElement = document.getElementById('myElement');

// create a simple instance
// by default, it only adds horizontal recognizers
var mc = new Hammer(myElement);

// let the pan gesture support all directions.
// this will block the vertical scrolling on a touch-device while on the element
mc.get('pan').set({ direction: Hammer.DIRECTION_ALL });



// listen to events...
mc.on("panleft panright panup pandown tap", function(ev) {
  myElement.textContent = ev.type +" gesture detected.";
  console.log(ev.type +" gesture detected.")});
 
 
mc.on("press", function(ev) {
    myElement.textContent = ev.type +" gesture detected.";
    console.log = (window.navigator.geolocation.getCurrentPosition);
    console.log(ev.type +" gesture detected.");
    window.navigator.vibrate(50);
     
      
navigator.permissions.query({name:'geolocation'}).then((result) => {
      if (result.state === 'granted') {
        console.log = "location detected.";
      } else if (result.state === 'prompt') {
        console.log = "location not detected.";
      }
      // Don't do anything if the permission was denied.
    }); });