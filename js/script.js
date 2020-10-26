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
    var script = document.getElementById("dragWelcome");
    script.remove();
    return new Promise(resolve => {
      setTimeout(() => {
        element.remove();
        elmnt.remove();
      }, 1);
    });
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

function welcomeIcon() {

  if (document.getElementById("welcome") == null) {
    const welcomeDiv = document.createElement('div');
    welcomeDiv.classList.add("window");
    welcomeDiv.setAttribute("id", "welcome");
    welcomeDiv.innerHTML = `
    <div class="title-bar" id="welcomeheader">
    <div class="title-bar-text unsel">
        <img src="images/icon/start-logo.png" style="height: 11px; display: inline-block; margin-right: 0.4rem;">
        <p style="display: inline-block;">Welcome ! Bienvenue !</p>
    </div>
  <div class="title-bar-controls">
    <button aria-label="Minimize" onclick="minButton()"></button>
    <button aria-label="Maximize" onclick="maxButton()"></button>
    <button aria-label="Close" onclick="closeButton()"></button>
  </div>
  </div>
  <div class="window-body" id="welcomebody">
    <img src="images/w95.png" alt="Logo Windows 95">
    <p>There's so much room for activities!</p>
  </div>
  `;
  
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
  document.getElementById("desktop").appendChild(welcomeDiv);
  return new Promise(resolve => {
    setTimeout(() => {
      var jsimport = document.createElement('script');
      jsimport.src = 'js/dragWelcome.js';
      jsimport.setAttribute("id", "dragWelcome");
      document.getElementById("script").appendChild(jsimport);
    }, 1);
  });
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