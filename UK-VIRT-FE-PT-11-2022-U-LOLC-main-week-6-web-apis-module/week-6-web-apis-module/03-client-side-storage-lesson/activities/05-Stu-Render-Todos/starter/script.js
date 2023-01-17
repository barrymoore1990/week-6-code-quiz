// Input
var todoInput = document.querySelector("#todo-text");
// Form HTML element
var todoForm = document.querySelector("#todo-form");
// ul, display element
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

todoList.textContent = "";
todoCountSpan.textContent = todos.length;

render();

function render() {
    todoList.innerHTML = "";
    for (let index = 0; index < todos.length; index++) {
        let liEl = document.createElement("li");
        liEl.textContent = todos[index];
        todoList.appendChild(liEl);
    }
    
}

console.log(todoInput.value);

todoForm.addEventListener('submit', function (e) {
    e.preventDefault();
    
      todos.push(todoInput.value);
      console.log(todos);
      render();
    
});

// loop over the todo array