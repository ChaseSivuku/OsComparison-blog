document.addEventListener("DOMContentLoaded", showMore);

function showMore() {
  const buttons = document.querySelectorAll(".showMore-button");

  buttons.forEach(button => {
    button.addEventListener("click", function () {
      getOneAtATime(this);
    });
  });
}

function getOneAtATime(clickedButton) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    const content = card.querySelector(".extra-content");
    const toggleButton = card.querySelector(".showMore-button");

    if (card.contains(clickedButton)) {
      const isOpen = content.classList.contains("show");

      content.classList.toggle("show", !isOpen);
      toggleButton.textContent = isOpen ? "Show More" : "Show Less";
    } else {
      content.classList.remove("show"); // ✅ "show" must be in quotes
      card.querySelector(".showMore-button").textContent = "Show More"; // ✅ reset other buttons
    }
  });
}
