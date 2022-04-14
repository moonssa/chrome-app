const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const todoForm = document.querySelector("#todo-form");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const TODOS_KEY = "todos";
const greeting = document.querySelector(".greeting");

todoForm.classList.add(HIDDEN_CLASSNAME);

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);

  paintingGreeting(username);
};

function paintingGreeting(savedUsername) {
  greeting.innerText = `Greeting ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("username");

if (savedUsername) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  todoForm.classList.remove(HIDDEN_CLASSNAME);
  paintingGreeting(savedUsername);
} else {
  const savedTodos = localStorage.getItem(TODOS_KEY);
  if (savedTodos) {
    localStorage.removeItem(TODOS_KEY);
  }
  loginForm.addEventListener("submit", onLoginSubmit);
}
