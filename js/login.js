const loginForm = document.querySelector(".login-form");
const loginInput = document.querySelector(".login-input");
const innerPage = document.querySelector(".inner-page");
const greeting = document.querySelector(".main-box__greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const savedUserName = localStorage.getItem(USERNAME_KEY);

function handleLoginClick() {
  loginInput.placeholder = "";
}
function hancleLoginBlur() {
  loginInput.placeholder = "Please write your name";
}
function handleLoginSubmit(event) {
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userName);
  innerPage.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `Hello, ${userName}`;
}

if (savedUserName === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginInput.addEventListener("click", handleLoginClick);
  loginInput.addEventListener("blur", hancleLoginBlur);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  innerPage.classList.remove(HIDDEN_CLASSNAME);
greeting.innerText = `Hello, ${savedUserName}`;

}
