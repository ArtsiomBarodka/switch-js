const replaceTextButton = document.getElementById("replace-text-button");
const paragraphElement = document.getElementById("paragraph");

const replaceText = () => {
  paragraphElement.textContent = "This is the new text.";
};

replaceTextButton.addEventListener("click", replaceText);
