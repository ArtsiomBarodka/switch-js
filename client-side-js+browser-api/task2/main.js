function goToPreviousPage() {
  history.go(-1);
}

const backButton = document.querySelector("#back-button");

backButton.addEventListener("click", goToPreviousPage);
