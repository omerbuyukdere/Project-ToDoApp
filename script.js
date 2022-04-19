const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {
  form.addEventListener("submit", addNewItem);
}

function addNewItem(e) {
  if (input.value === "") {
    alert("please enter item");
  }
  // create li
  const li = document.createElement("li");
  li.className = "list-group-item list-group-item-secondary";
  li.appendChild(document.createTextNode(input.value));
  // create a
  const a = document.createElement("a");
  a.setAttribute("href", "#");
  a.className = "delete-item float-right";
  a.innerHTML = '<i class="fas fa-times"></i>';
  // add a to li
  li.appendChild(a);

  // add li to ul
  taskList.appendChild(li);

  // clean input
  input.value = "";

  e.preventDefault();
}
