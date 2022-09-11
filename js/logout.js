const logout = document.querySelector(".upper-bar__logout");

function handleLogoutClick() {
  localStorage.clear();
  location.reload();
}

logout.addEventListener("click", handleLogoutClick);
