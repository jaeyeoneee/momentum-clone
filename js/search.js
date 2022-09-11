const search = document.querySelector(".main-box__search");
const searchForm = document.querySelector(".main-box__search-form");

function handleSubmit(event) {
  event.preventDefault();
  search.value = "";
}

searchForm.addEventListener("submit", handleSubmit);
