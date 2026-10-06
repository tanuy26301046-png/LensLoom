const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-btn");
const emptyState = document.getElementById("empty-state");
const resultsContainer = document.getElementById("results");
const initialEmptyState = emptyState.querySelector(".empty-text").textContent;

let statusMessage = document.getElementById("status-message");
if (!statusMessage) {
  statusMessage = document.createElement("p");
  statusMessage.id = "status-message";
  statusMessage.className = "status-message";
  searchForm.insertAdjacentElement("afterend", statusMessage);
}

function setEmptyState(message) {
  emptyState.querySelector(".empty-text").textContent = message;
}

function resetEmptyState() {
  setEmptyState(initialEmptyState);
}

searchForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (!query) {
    setEmptyState("Enter a search term to look for visual inspiration.");
    searchInput.focus();
    return;
  }

  await fetchAndRenderImages(query);
});

document.querySelectorAll(".chip").forEach((chip) => {
  chip.addEventListener("click", () => {
    searchInput.value = chip.textContent.trim();
    searchForm.requestSubmit();
  });
});

clearButton.addEventListener("click", () => {
  searchInput.value = "";
  resultsContainer.innerHTML = "";
  statusMessage.textContent = "";
  resetEmptyState();
  searchInput.focus();
});

