const showInfoButton = document.getElementById("show-info-button");
const screenInfoElement = document.getElementById("screen-info");

const showScreenInfo = () => {
  const sreenWidth = window.screen.width;
  const sreenHeight = window.screen.height;
  screenInfoElement.textContent = `Screen width = ${sreenWidth}, height = ${sreenHeight}`;
};

showInfoButton.addEventListener("click", showScreenInfo);
