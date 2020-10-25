// Make the DIV element draggable:
dragElement(document.getElementById("welcome"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    // if present, the header is where you move the DIV from:
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  };

  function elementDrag(e) {
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    elmnt.style.margin = "0";
    elmnt.classList.remove("max");
  };

  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
};

window.addEventListener('click', function(e){   
  if (document.getElementById('welcome').contains(e.target) || document.getElementById('welcome-tab').contains(e.target)){
    // Clicked in box
    var element = document.getElementById("welcomeheader");
    element.classList.remove("inactive");
    var element = document.getElementById("welcome-tab");
    element.classList.remove("inactive-tab");
  } else{
    // Clicked outside the box
    var element = document.getElementById("welcomeheader");
    element.classList.add("inactive");
    var element = document.getElementById("welcome-tab");
    element.classList.add("inactive-tab");
  }
});

function closeButton() {
    var element = document.getElementById("welcome");
    var elmnt = document.getElementById("welcome-tab");
    element.classList.add("hidden");
    elmnt.classList.add("hidden");
};

function maxButton() {
    var element = document.getElementById("welcome");
    element.classList.toggle("max");
};

function minButton() {
    return new Promise(resolve => {
    setTimeout(() => {
      var element = document.getElementById("welcome");
      element.classList.add("hidden");
      var element = document.getElementById("welcome-tab");
      element.classList.add("inactive-tab");
    }, 1);
  });
};

function restoreWelcome() {
  var element = document.getElementById("welcome");
  element.classList.remove("hidden");
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('time').innerHTML =
    h + ":" + m ;
    var t = setTimeout(startTime, 500);
  };
  function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  };
