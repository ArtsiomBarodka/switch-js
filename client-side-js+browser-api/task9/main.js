const modifyButton = document.getElementById("modify-button");
const element = document.getElementById("element");

const modifyElement = () => {
  element.style.color = "red";
  element.setAttribute("data-custom-attr", "value");
};

modifyButton.addEventListener("click", modifyElement);
