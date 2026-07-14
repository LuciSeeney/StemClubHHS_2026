console.log("Loaded!");

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
      console.log("Panel height: " + panel.scrollHeight);
    }
  });
}

var sidePanel = document.getElementById("sidePanel");

function toggleSidePanel() {
  if (sidePanel.style.width === "240px") {
    closeSidePanel();
  } else {
    openSidePanel();
  }
}

function openSidePanel() {
  sidePanel.style.width = "240px";
  sidePanel.classList.add("side-panel-open");
}

function closeSidePanel() {
  sidePanel.style.width = "0";
  sidePanel.classList.remove("side-panel-open");
}

var sidePanelButton = document.querySelector(".sidePanelButton");
sidePanelButton.addEventListener("click", moveSidePanelButton);
sidePanelButton.addEventListener("click", moveMain);

var openIcon = document.querySelector(".open-icon");
var closeIcon = document.querySelector(".close-icon");

function moveSidePanelButton() {
  if (sidePanel.style.width === "240px") {
    sidePanelButton.style.marginLeft = "240px";
    openIcon.style.display = "none";
    closeIcon.style.display = "block";
  } else {
    sidePanelButton.style.marginLeft = "0";
    openIcon.style.display = "block";
    closeIcon.style.display = "none";
  }
}

var mainContent = document.getElementById("mainContent");

function moveMain() {
  if (sidePanel.style.width === "240px") {
    mainContent.style.marginLeft = "240px";
  } else {
    mainContent.style.marginLeft = "0";
  }
}
