
function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    var el = ev.target;
    var parent = el.getAttribute("data-parent");
    
    if(!parent){
        el.setAttribute("data-parent", el.parentNode.id);
    }
    
    ev.dataTransfer.setData("Text", el.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

function dragEnd(ev){
    if(ev.dataTransfer.dropEffect == "none"){
         var parent = document.getElementById(ev.target.getAttribute("data-parent"));
        
        parent.appendChild(ev.target);
    }
}