const filterButtons = Array.from(document.querySelectorAll("[data-filter]"));
const journalCards = Array.from(document.querySelectorAll(".journal-card"));
const currentYear = document.querySelector("#current-year");

if (currentYear) {
  currentYear.textContent = new Date().getFullYear();
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    journalCards.forEach((card) => {
      const matchesFilter = selectedFilter === "all" || card.dataset.kind === selectedFilter;
      card.classList.toggle("is-hidden", !matchesFilter);
    });
  });
});
