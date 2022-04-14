// const TODOS_KEY = "todos";
const toDoForm = document.querySelector("#todo-form");
const toDoList = document.querySelector("ul");

const deleteTodoList = (event) => {
  console.log(event);
  const li = event.target.parentElement;
  toDos = toDos.filter((todo) => todo.id !== parseInt(li.id));
  li.remove();
  saveTodoList();
};

let toDos = [];

const saveTodoList = () => {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
};

const paintTodoList = (newTodoObj) => {
  const li = document.createElement("li");
  li.id = newTodoObj.id;
  const span = document.createElement("span");
  const btn = document.createElement("button");
  span.innerText = newTodoObj.text;
  btn.innerText = "❌";
  li.appendChild(span);
  li.appendChild(btn);

  toDoList.appendChild(li);
  btn.addEventListener("click", deleteTodoList);
};

const onTodoSubmit = (event) => {
  event.preventDefault();
  const input = toDoForm.querySelector("input");
  const newTodo = input.value;
  if (newTodo === "") {
    return;
  }
  input.value = "";

  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);

  paintTodoList(newTodoObj);
  saveTodoList();
};

toDoForm.addEventListener("submit", onTodoSubmit);
const savedTodos = localStorage.getItem(TODOS_KEY);

if (savedTodos !== null) {
  toDos = JSON.parse(savedTodos);
  toDos.forEach((todo) => paintTodoList(todo));
}
