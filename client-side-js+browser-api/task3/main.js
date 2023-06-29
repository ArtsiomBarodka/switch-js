const showInfoButton = document.getElementById("show-info-button");
const browserInfoElement = document.getElementById("browser-info");

const showBrowserInfo = () => {
  const browserInfo = navigator.userAgent;
  browserInfoElement.textContent = browserInfo;
};

showInfoButton.addEventListener("click", showBrowserInfo);
