const inputElem = document.querySelector('#input-name');
const form = document.querySelector('#form');
const listElem = document.querySelector('#to-do-list');
const buttonElem = document.querySelector('#to-do-list button');

const toDoArray = JSON.parse(localStorage.getItem('to-do-list')) || [];

function updateList() {
  listElem.innerHTML = '';

  for (const key in toDoArray) {
    const li = document.createElement('li');

    const span = document.createElement('span');
    span.innerText = toDoArray[key];

    const button = document.createElement('button');
    button.innerText = 'Delete';
    button.setAttribute('key',key);
    button.classList.add('delete');

    li.appendChild(span);
    li.appendChild(button);
    listElem.appendChild(li);
  }

  localStorage.setItem('to-do-list',JSON.stringify(toDoArray));
}

function addToList(value) {
  if(value === '') return;

  toDoArray.push(value);

  updateList();
  inputElem.value = '';
  inputElem.focus();
}

function deleteFromList(key) {
  toDoArray.splice(Number(key),1);

  updateList();
  inputElem.value = '';
  inputElem.focus();
}

form.addEventListener('submit',e =>{
  e.preventDefault();
  addToList(inputElem.value);
});

document.addEventListener('click',e =>{
  const el = e.target;
  if (el.classList.contains('delete')) {
    deleteFromList(el.getAttribute('key'));
  }
});

updateList();
/* var todos = [];

function  Todo(name) {
    this.name = name;
    this.completed = false;
}

function addNewTodoWithName(name){
    var t = new Todo(name);
    todos.push(t);
    saveTodos();







    
}

function removeTodoAtIndex(index){
    todos.splice(index,1);
    saveTodos();
}

function getTodoAtIndex(index) {
    return todos[index];
}

function saveTodos() {
    var str = JSON.stringify(todos);
    localStorage.setItem("todos",str);
}

function getTodos() {
   var str = localStorage.getItem();
   todos = JSON.parse(str);
   if (!todos) {
       todos = [];
   } 
}

getTodos();
listTodos();

function  listTodos() {
    var html = "";
    for (var i in todos) {
        
        var todo = todos[i];
        var name = todo.name;
        var completed = todo.completed;
        html += "<li>"+name+"<span>"+completed+"</span></li>";
    }
    $("#list-todos").html(html);
}

$("#add-todo-form").submit(function (event) {
    event.preventDefault();

    var name = $("#todo-name").val();

    addNewTodoWithName(name);
    listTodos();
}); */