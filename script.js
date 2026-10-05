const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");
const clearButton = document.getElementById("clear-btn");
const emptyState = document.getElementById("empty-state");
const initialEmptyState = emptyState.querySelector(".empty-text").textContent;

searchForm.addEventListener("submit", (event) => {
	event.preventDefault();

	const query = searchInput.value.trim();
	const message = query
		? `No images are loaded for "${query}" yet. Connect an image source to display search results.`
		: "Enter a search term to look for visual inspiration.";

	emptyState.querySelector(".empty-text").textContent = message;
	if (!query) searchInput.focus();
});

document.querySelectorAll(".chip").forEach((chip) => {
	chip.addEventListener("click", () => {
		searchInput.value = chip.textContent.trim();
		searchForm.requestSubmit();
	});
});

clearButton.addEventListener("click", () => {
	searchInput.value = "";
	emptyState.querySelector(".empty-text").textContent = initialEmptyState;
	searchInput.focus();
});