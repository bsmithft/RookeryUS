Element.style.setProperty('webkitUserDrag','element');
Element.style.setProperty('webkitUserDrop','element');

System.import("mobile-drag-drop");
// import css if using system-js css loader plugin 
System.import("mobile-drag-drop/default.css!");
import {polyfill} from "mobile-drag-drop";

// optional import of scroll behaviour
import {scrollBehaviourDragImageTranslateOverride} from "mobile-drag-drop/scroll-behaviour";

// options are optional ;)
polyfill({
    // use this to make use of the scroll behaviour
    dragImageTranslateOverride: scrollBehaviourDragImageTranslateOverride
});
// dragenter listener
    (event)=> {
        event.preventDefault();
    } 
    window.addEventListener( 'touchmove', function() {}, {passive: false});
    Element.setAttribute('draggable',true);
        
    function OnDragOver(Event)
    {
        Element.setAttribute('DragOver',true);
        Event.stopPropagation();    //  let child accept and don't pass up to parent element
        Event.preventDefault();     //  ios to accept drop
        Event.dataTransfer.dropEffect = 'copy';//   move has no icon? adding copy shows +
    }
    function OnDragLeave(Event)
    {
        Element.removeAttribute('DragOver');
    }
    function OnDrop(Event)
    {
        Element.removeAttribute('DragOver');
        Event.preventDefault();     //  dont let page attempt to load our data
        Event.stopPropagation();
    }
    function OnDragStart(Event)
    {
        Event.stopPropagation(); // let child take the drag
        Event.dataTransfer.dropEffect = 'move';
        Event.dataTransfer.setData('text/plain', 'hello');
    }
    Element.addEventListener('dragstart',OnDragStart);
    Element.addEventListener('drop',OnDrop);
    Element.addEventListener('dragover',OnDragOver);
    Element.addEventListener('dragleave',OnDragLeave);    