const highlightButton = document.getElementById("highlight-button");

const highlightParagraphs = () => {
  const paragraphs = document.querySelectorAll("p");
  paragraphs.forEach((p) => {
    p.classList.add("highlight");
  });
};

highlightButton.addEventListener("click", highlightParagraphs);
