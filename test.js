function vibrate(){
    window.navigator.vibrate(100);
  }
  
  
  function makeDraggable(elmnt) {
    let pos1 = 0,
      pos2 = 0,
      pos3 = 0,
      pos4 = 0;
  
    let dragHandle = elmnt.getElementsByClassName("drag-handle")[0];
  
    if (dragHandle !== undefined) {
      // if present, the header is where you move the DIV from:
      dragHandle.onmousedown = dragMouseDown;
  
      // dragHandle.ontouchstart = dragMouseDown; //added touch event
      dragHandle.addEventListener("touchstart", dragMouseDown, false);
    } else {
      // otherwise, move the DIV from anywhere inside the DIV:
      elmnt.onmousedown = dragMouseDown;
      elmnt.addEventListener("touchstart", dragMouseDown, false); //added touch event
    }
  
    function dragMouseDown(e) {
      document.getElementsByClassName('like')[0].style.display = "block";
      document.getElementsByClassName('dislike')[0].style.display = "block";
      document.getElementsByClassName('more')[0].style.display = "block";
      document.getElementsByClassName('less')[0].style.display = "block";
      window.navigator.vibrate(50);
      
      console.log("dragMouseDown called by event: ", e.type);
      // e = e || window.event;
      e.preventDefault();
      let x;
      let y;
  
  
      
      //Get touch or click position
      //https://stackoverflow.com/a/41993300/5078983
      if (
        e.type === "touchstart" ||
        e.type === "touchmove" ||
        e.type === "touchend" ||
        e.type === "touchcancel"
      ) {
        let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
        let touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
      } else if (
        e.type === "mousedown" ||
        e.type === "mouseup" ||
        e.type === "mousemove" ||
        e.type === "mouseover" ||
        e.type === "mouseout" ||
        e.type === "mouseenter" ||
        e.type === "mouseleave"
      ) {
        x = e.clientX;
        y = e.clientY;
      }
  
      console.log("drag start x: " + x + " y:" + y);
  
      // get the mouse cursor position at startup:
      pos3 = x;
      pos4 = y;
      document.onmouseup = dragStart;
      document.onmouseup = closeDragElement;
      // document.ontouchend = closeDragElement;
      document.addEventListener("touchend", closeDragElement, false);
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      // document.ontouchmove = elementDrag;
      document.addEventListener("touchmove", elementDrag, false);
    }
    function dragStart () {
      ev.target.appendChild(document.getElementById(test-full-draggable));    
    }
    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      let x;
      let y;
  
  
      //Get touch or click position
      //https://stackoverflow.com/a/41993300/5078983
      if (
        e.type === "touchstart" ||
        e.type === "touchmove" ||
        e.type === "touchend" ||
        e.type === "touchcancel"
      ) {
        let evt = typeof e.originalEvent === "undefined" ? e : e.originalEvent;
        let touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
      } else if (
        e.type === "mousedown" ||
        e.type === "mouseup" ||
        e.type === "mousemove" ||
        e.type === "mouseover" ||
        e.type === "mouseout" ||
        e.type === "mouseenter" ||
        e.type === "mouseleave"
      ) {
        x = e.clientX;
        y = e.clientY;
      }
  
      // calculate the new cursor position:
      pos1 = pos3 - x;
      pos2 = pos4 - y;
      pos3 = x;
      pos4 = y;
      // set the element's new position:
      elmnt.style.top = elmnt.offsetTop - pos2 + "px";
      elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
    }
  
    function closeDragElement() {
      document.getElementsByClassName('like')[0].style.display = "none";
      document.getElementsByClassName('dislike')[0].style.display = "none";
      document.getElementsByClassName('more')[0].style.display = "none";
      document.getElementsByClassName('less')[0].style.display = "none";
      console.log("drag end x: " + pos3 + " y:" + pos4);
      // stop moving when mouse button is released:
      document.onmouseup = null;
      document.ontouchcancel = null; //added touch event
      document.onmousemove = null;
      // document.ontouchend = null; //added touch event
      document.removeEventListener("touchend", closeDragElement, false);
      document.removeEventListener("touchmove", elementDrag, false);
      // document.ontouchmove = null; //added touch event
  }
     
              
  }
  function showlike() {
          document.getElementsByClassName('like')[0].style.display = "block";
      }
  function showdislike() {
          document.getElementsByClassName('dislike')[0].style.display = "block";
      }    
  function showmore() {
          document.getElementsByClassName('more')[0].style.display = "block";
      }    
  function showless() {
          document.getElementsByClassName('less')[0].style.display = "block";
      }
  /*******************************
        test js */
  makeDraggable(document.getElementById("test-full-draggable"));
  
  
  
  
  /* draggable element */
  const item = document.querySelector('.item');
  
  item.addEventListener('dragstart', dragStart);
  
  function dragStart(e) {
      e.dataTransfer.setData('text/plain', e.target.id);
      setTimeout(() => {
          e.target.classList.add('hide');
      }, 0);
  }
  
  
  /* drop targets */
  const boxes = document.querySelectorAll('.box');
  
  boxes.forEach(box => {
      box.addEventListener('dragenter', dragEnter)
      box.addEventListener('dragover', dragOver);
      box.addEventListener('dragleave', dragLeave);
      box.addEventListener('drop', drop);
  });
  
  
  function dragEnter(e) {
      e.preventDefault();
      e.target.classList.add('drag-over');
  }
  
  function dragOver(e) {
      e.preventDefault();
      e.target.classList.add('drag-over');
  }
  
  function dragLeave(e) {
      e.target.classList.remove('drag-over');
  }
  
  function drop(e) {
      e.target.classList.remove('drag-over');
  
      // get the draggable element
      const id = e.dataTransfer.getData('text/plain');
      const draggable = document.getElementById(id);
  
      // add it to the drop target
      e.target.appendChild(draggable);
  
      // display the draggable element
      draggable.classList.remove('hide');
  }