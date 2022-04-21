const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
const btnPlus = document.querySelector("#btnAddNewTask");

eventListeners();

function eventListeners() {
  // add item
  form.addEventListener("submit", addNewItem);
  // delete an item
  taskList.addEventListener("click", deleteItem);
  btnDeleteAll.addEventListener("click", deleteAllItem);
  // click event
  btnPlus.addEventListener("click", addNewItem);
}
// add item
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
// add item btn

// delete item

function deleteItem(e) {
  let areyousure = confirm("Are you sure ?");
  if ((e.target.className = "fas fa-times")) {
    areyousure;
    if (areyousure === true) {
      e.target.parentElement.parentElement.remove();
    } else {
      console.log(e.target);
    }
  }
  e.preventDefault();
}

//delete all item
function deleteAllItem(e) {
  let areyousure = confirm("Are you sure ?");
  if (
    (e.target.className =
      "btn btn-outline-danger btn-sm delete-all float-right")
  ) {
    areyousure;
    if (areyousure === true) {
      taskList.innerHTML = "";
    }
    if (areyousure === false) {
      console.log(e.target);
    }
  }
}
