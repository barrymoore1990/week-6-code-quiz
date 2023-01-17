var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = JSON.parse(localStorage.getItem("todos"));

if(todos === null)
todos = [];

renderTodos();

function renderTodos() {
  // Clear todoList element and update todoCountSpan
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];

    var li = document.createElement("li");
    li.textContent = todo;

    var completeBtn = document.createElement("button");
    completeBtn.textContent = "complete";
    completeBtn.setAttribute("data-index", i);
    li.appendChild(completeBtn);

    todoList.appendChild(li); 
  }
}

todoList.addEventListener("click", function(event){


  if(event.target.matches("button")){
    let removeIndex = event.target.getAttribute("data-index");
    console.log(removeIndex);
    todos.splice(removeIndex, 1);
    console.log(todos);
    renderTodos();
  }



})

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  localStorage.setItem("todos", JSON.stringify(todos));
  todoInput.value = "";

  // Re-render the list
  renderTodos();
});
