const shopping = document.getElementById('shopping');
shopping.addEventListener('mousedown' , function() {
    pressTimer = window.setTimeout(longpressed,1000);
});
shopping.addEventListener('mouseup' , function(e) {
    clearTimeout(pressTimer);
});

shopping.addEventListener('click' , function(e) {
    console.log('click');
});

function longpressed() {
    console.log('longpress');
    window.navigator.vibrate(50);
    window.addEventListener(
        'click',
        captureClick,
        true // <-- This registers this listener for the capture
             //     phase instead of the bubbling phase!
    );
}

function captureClick(e) {
    e.stopPropagation(); // Stop the click from being propagated.
    window.removeEventListener('click', captureClick, true); // cleanup
}