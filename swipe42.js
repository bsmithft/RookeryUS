  //Long touch recognizer
  var onlongtouch; 
  var timer;
  var touchduration = 800; //length of time we want the user to touch before we do something
  
  function touchstart(e) {
      e.preventDefault();
      if (!timer) {
          timer = setTimeout(onlongtouch, touchduration);
      }
  }
  
  function touchend() {
      //stops short touches from firing the event
      if (timer) {
          clearTimeout(timer);
          timer = null;
      }
  }
  
  onlongtouch = function() { 
      timer = null;
      document.getElementById('swipe42').innerText+='swipe42\n'; 
  };
  
  document.addEventListener("DOMContentLoaded", function(event) { 
      window.addEventListener("touchstart", touchstart, false);
      window.addEventListener("touchend", touchend, false);
  });
  
  //Randomizer
  var cat1 = ["/assets/img/CommunityChest/perrotties.png"];
            
  var myFrame = document.getElementById("frame");
  getRandom(myFrame);
  
  function getRandom(myFrame) {
     var index = Math.floor(Math.random()*cat1.length);
     var url = cat1[index];
     document.getElementById('frame').src = url;
  }
  
  
  //Gesture recognizer
  // get 'surface' and 'swipe42' elements
  const surface = zuix.field('surface');
  const swipe42 = zuix.field('swipe42');
  
  // load the gesture helper on the surface
  zuix.load('@lib/controllers/gesture_helper', {
  view: surface, // <- where to apply the gesture helper
  on: {
  'gesture:pan': (e, tp) => {
  if (swipe42.hasClass('touched')) {
  const tr = 'translate('+tp.shiftX+'px,'+tp.shiftY+'px)';
  swipe42.css('transform', tr);
  tp.cancel(); // prevent default
  }
  },
  'gesture:release': () => {
  swipe42.removeClass('touched')
  .css('transform', '');
  }
  },
  passive: false
  });
  
  // load the gesture helper on the swipe42
  zuix.load('@lib/controllers/gesture_helper', {
  view: swipe42, // <- where to apply the gesture helper
  on: {
  'gesture:touch': () => {
  swipe42.addClass('touched');
  },
  'gesture:tap': () => {
  swipe42.addClass('animated bounce')
  .one('animationend', ()=>{
  swipe42.removeClass('animated bounce');        
  });
  }
  }
  });