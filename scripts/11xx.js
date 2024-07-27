let tasks = JSON.parse(localStorage.getItem("store")) || [
  { name: "hi", dueDate: "22-12-2024" },
  { name: "bye", dueDate: "22-12-2024" },
];
renderToDoList();

function renderToDoList() {
  let toDoListHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    const todoObject = tasks[i];
    const { name, dueDate } = todoObject;
    const html = `<p>${name} ${dueDate} <button onclick="deleteToDoItem(${i});">Delete</button></p>`;
    toDoListHTML += html;
  }
  document.querySelector(".js-do-list").innerHTML = toDoListHTML;
}

function addToDo() {
  const inputElement = document.querySelector(".js-input");
  const name = inputElement.value;
  const dueDateElement = document.querySelector(".js-dueDate");
  const dueDate = dueDateElement.value;
  tasks.push({ name, dueDate });
  saveToStorage();
  console.log(tasks);
  inputElement.value = "";
  renderToDoList();
}

function deleteToDoItem(index) {
  tasks.splice(index, 1);
  renderToDoList();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem("store", JSON.stringify(tasks));
}
