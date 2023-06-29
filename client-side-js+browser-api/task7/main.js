const highlightButton = document.getElementById("highlight-button");
const paragraphs = document.querySelectorAll("p");

const highlightParagraphs = () => {
  paragraphs.forEach((p) => {
    p.classList.add("highlight");
  });
};

highlightButton.addEventListener("click", highlightParagraphs);
