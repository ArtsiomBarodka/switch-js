const changeColorButton = document.getElementById("change-color-button");

const changeColor = () => {
  document.body.style.backgroundColor = "yellow";
};

changeColorButton.addEventListener("click", changeColor);
