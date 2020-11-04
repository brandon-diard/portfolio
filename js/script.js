//.................................Time Taskbar.......................................................//

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

//.................................Time Taskbar.......................................................//


//                    Welcome Window Script                   //



//.................................Welcome Window Draggable.......................................................//

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
    document.getElementById("welcomeheader").classList.remove("inactive");
    document.getElementById("welcome-tab").classList.remove("inactive-tab");
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

//.................................Welcome Window Draggable.......................................................//

//.................................Welcome Outside/Inside Click.......................................................//

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

//.................................Welcome Outside/Inside Click.......................................................//

//.................................Welcome Window Button.......................................................//

function closeButtonWelcome() {
    var element = document.getElementById("welcome");
    var elmnt = document.getElementById("welcome-tab");
    element.classList.add("hidden");
    elmnt.remove();
};

function maxButtonWelcome() {
    var element = document.getElementById("welcome");
    element.classList.toggle("max");
};

function minButtonWelcome() {
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
  element.classList.toggle("hidden");

  if (element.classList.contains("hidden")) {
    return new Promise(resolve => {
      setTimeout(() => {
        var elmnt = document.getElementById("welcome-tab");
        elmnt.classList.add("inactive-tab")
      }, 1);
    });
  } else {
    var elmnt = document.getElementById("welcome-tab");
    elmnt.classList.remove("inactive-tab")
  }
}

//.................................Welcome Window Button.......................................................//

//.................................Welcome Desktop Icon.......................................................//

function welcomeIcon() {

  if (document.getElementById("welcome").classList.contains("hidden")) {
    var element = document.getElementById("welcome");
    element.classList.remove("hidden");
    const welcomeTab = document.createElement('div');
    welcomeTab.classList.add("tab");
    welcomeTab.classList.add("unsel");
    welcomeTab.setAttribute("id", "welcome-tab");
    welcomeTab.setAttribute("onclick", "restoreWelcome()");
    welcomeTab.innerHTML = `
    <img src="images/icon/start-logo.png" style="height: 20px;">
    <p class="welcome-tab">Welcome ! Bienvenue !</p>
    `;
    
    document.getElementById("task").appendChild(welcomeTab);
  } else {
    var tabchange = document.getElementById("welcome-tab");
    tabchange.classList.remove("inactive-tab");
    var anim = document.getElementById("welcomeheader");
    anim.classList.remove("inactive");
    anim.classList.add("anim");
    return new Promise(resolve => {
      setTimeout(() => {
        anim.classList.remove("anim");
      }, 2000);
    });
  }
}

//.................................Welcome Desktop Icon.......................................................//



//                    Welcome Window Script                   //

//                    Internet Window Script                   //



//.................................Internet Window Draggable.......................................................//

// Make the DIV element draggable:
dragElementIntex(document.getElementById("internet"));

function dragElementIntex(elmnt) {
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
    document.getElementById("internetheader").classList.remove("inactive");
    document.getElementById("internet-tab").classList.remove("inactive-tab");
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

//.................................Internet Window Draggable.......................................................//

//.................................Internet Outside/Inside Click.......................................................//

window.addEventListener('click', function(e){   
  if (document.getElementById('internet').contains(e.target) || document.getElementById('internet-tab').contains(e.target)){
    // Clicked in box
    var element = document.getElementById("internetheader");
    element.classList.remove("inactive");
    var element = document.getElementById("internet-tab");
    element.classList.remove("inactive-tab");
  } else{
    // Clicked outside the box
    var element = document.getElementById("internetheader");
    element.classList.add("inactive");
    var element = document.getElementById("internet-tab");
    element.classList.add("inactive-tab");
  }
});

//.................................Internet Outside/Inside Click.......................................................//

//.................................Internet Window Button.......................................................//

function closeButtonInternet() {
    var element = document.getElementById("internet");
    var elmnt = document.getElementById("internet-tab");
    element.classList.add("hidden");
    elmnt.remove();
};

function maxButtonInternet() {
    var element = document.getElementById("internet");
    element.classList.toggle("max");
};

function minButtonInternet() {
    return new Promise(resolve => {
    setTimeout(() => {
      var element = document.getElementById("internet");
      element.classList.add("hidden");
      var element = document.getElementById("internet-tab");
      element.classList.add("inactive-tab");
    }, 1);
  });
};

function restoreInternet() {
  var element = document.getElementById("internet");
  element.classList.toggle("hidden");

  if (element.classList.contains("hidden")) {
    return new Promise(resolve => {
      setTimeout(() => {
        var elmnt = document.getElementById("internet-tab");
        elmnt.classList.add("inactive-tab")
      }, 1);
    });
  } else {
    var elmnt = document.getElementById("internet-tab");
    elmnt.classList.remove("inactive-tab")
  }
}

//.................................Internet Window Button.......................................................//

//.................................Internet Desktop Icon.......................................................//

function internetIcon() {

  if (document.getElementById("internet").classList.contains("hidden")) {
    var element = document.getElementById("internet");
    element.classList.remove("hidden");
    const internetTab = document.createElement('div');
    internetTab.classList.add("tab");
    internetTab.classList.add("unsel");
    internetTab.setAttribute("id", "internet-tab");
    internetTab.setAttribute("onclick", "restoreInternet()");
    internetTab.innerHTML = `
    <img src="images/icon/internet.ico" style="height: 20px;">
    <p class="internet-tab">Internet Explorer</p>
    `;
    
    document.getElementById("task").appendChild(internetTab);
  } else {
    var tabchange = document.getElementById("internet-tab");
    tabchange.classList.remove("inactive-tab");
    var anim = document.getElementById("internetheader");
    anim.classList.remove("inactive");
    anim.classList.add("anim");
    return new Promise(resolve => {
      setTimeout(() => {
        anim.classList.remove("anim");
      }, 2000);
    });
  }
}

//.................................Internet Desktop Icon.......................................................//

//.................................Internet Toolbar Function.......................................................//

var zoom = 1;

function zoomIn() {
  var iframe = document.getElementById("iframeInter");
  zoom = zoom + 0.1;
  iframe.style.transform = "scale(" + zoom + ")";
}

function zoomOut() {
  var iframe = document.getElementById("iframeInter");
  zoom = zoom - 0.1;
  iframe.style.transform = "scale(" + zoom + ")";
}

function setBrowser() {
  var browser = document.getElementById("iframeInter");
  browser.src = document.getElementById("address").value;
}

function popupWaning() {
  var copy = document.getElementById("popupInternet");
  var copyheader = document.getElementById("popupInternetheader");
  copy.classList.remove("hidden");
  return new Promise(resolve => {
    setTimeout(() => {
      copyheader.classList.remove("inactive");
    }, 10);
  });
}

//.................................Internet Toolbar Function.......................................................//



//                    Internet Window Script                   //

//                    Popup Window Script                   //

//.................................Popup Window Draggable.......................................................//

// Make the DIV element draggable:
dragElement(document.getElementById("popupInternet"));

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
    document.getElementById("popupInternetheader").classList.remove("inactive");
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

//.................................Popup Window Draggable.......................................................//

//.................................Popup Outside/Inside Click.......................................................//

window.addEventListener('click', function(e){   
  if (document.getElementById('popupInternet').contains(e.target) || document.getElementById('welcome-tab').contains(e.target)){
    // Clicked in box
    var element = document.getElementById("popupInternetheader");
    element.classList.remove("inactive");
  } else{
    // Clicked outside the box
    var element = document.getElementById("popupInternetheader");
    element.classList.add("inactive");
  }
});

//.................................Popup Outside/Inside Click.......................................................//

//.................................Popup Window Button.......................................................//

function closeButtonpopupInternet() {
  var element = document.getElementById("popupInternet");
  element.classList.add("hidden");
};

//.................................Popup Window Button.......................................................//

//                    Popup Window Script                   //