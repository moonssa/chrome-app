const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const greeting = document.querySelector(".greeting");

const onLoginSubmit = (event) => {
  event.preventDefault();
  const username = loginInput.value;

  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASSNAME);

  paintingGreeting(username);
};

function paintingGreeting(savedUsername) {
  greeting.innerText = `Greeting ${savedUsername}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const savedUsername = localStorage.getItem("username");

if (savedUsername) {
  loginForm.classList.add(HIDDEN_CLASSNAME);
  paintingGreeting(savedUsername);
} else {
  loginForm.addEventListener("submit", onLoginSubmit);
}
