const childButton = document.getElementById("child-button");
const parentElement = document.getElementById("parent-element");

childButton.addEventListener("click", function () {
  alert("Child Button");
});

parentElement.addEventListener("click", function () {
  alert("Parent Element");
});
