const setCookieButton = document.getElementById("set-cookie-button");

const setCookie = () => {
  const cookieName = "cookieName";
  const cookieValue = "cookieValue";
  document.cookie = `${cookieName}=${cookieValue}`;
};

setCookieButton.addEventListener("click", setCookie);
