const toDoForm = document.querySelector(".main-box__todo-form");
const toDoInput = document.querySelector(".main-box__todo-input");
const toDoList = document.querySelector(".main-box__todo-list");

const TODOS_KEY = "todos";
const HIDDEN = "hidden";
const MARGIN_TOP = "margin-top";
const OVERLINE = "overline";

let toDos = [];

const savedToDos = localStorage.getItem(TODOS_KEY);

// function handleCheckFocus() {
// const toDoSpan = toDoInput.querySelector("span");
// toDoSpan.classList.add(OVERLINE);
// }
// function handleCheckBlur() {
// const toDoSpan = toDoInput.querySelector("span");
// toDoSpan.classList.remove(OVERLINE);
// }

function handleCheckChange(event) {
  const li = event.target.parentElement;
  const toDoSpan = li.querySelector("span");

  const order = toDos.findIndex((item) => item.id === parseInt(li.id));

  if (toDos[order].clicked === false) {
    toDos[order].clicked = true;
  } else {
    toDos[order].clicked = false;
  }

  toDoSpan.classList.toggle(OVERLINE);
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function handleButtonClick(event) {
  const li = event.target.parentElement;
  toDos = toDos.filter((item) => item.id !== parseInt(li.id));
  li.remove();
  saveToDos();
  if (toDos.length < 8) {
    toDoForm.classList.remove(HIDDEN);
    toDoList.classList.remove(MARGIN_TOP);
  }
}

function paintToDos(newObj) {
  const li = document.createElement("li");
  li.id = newObj.id;
  const span = document.createElement("span");
  span.innerText = newObj.text;
  const button = document.createElement("button");
  button.innerText = "X";
  const check = document.createElement("input");
  check.type = "checkbox";
  check.checked = newObj.clicked;
  if (check.checked) {
    span.classList.add(OVERLINE);
  }
  check.addEventListener("change", handleCheckChange);
  // check.addEventListener("blur", handleCheckBlur);
  button.addEventListener("click", handleButtonClick);
  li.appendChild(check);
  li.appendChild(span);
  li.appendChild(button);
  toDoList.appendChild(li);
  if (toDos.length >= 8) {
    toDoForm.classList.add(HIDDEN);
    toDoList.classList.add(MARGIN_TOP);
  }
}

function handleFormSubmit(event) {
  event.preventDefault();
  const todo = toDoInput.value;
  toDoInput.value = "";
  const newObj = {
    id: Date.now(),
    text: todo,
    clicked: false,
  };
  toDos.push(newObj);
  paintToDos(newObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleFormSubmit);

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  toDos.forEach(paintToDos);
}
