function redirectToGooglePage() {
  window.location.href = "https://google.com";
}

const redirectButton = document.querySelector("#redirect-button");

redirectButton.addEventListener("click", redirectToGooglePage);
