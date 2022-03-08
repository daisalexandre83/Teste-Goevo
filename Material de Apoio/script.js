var todos = [];

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
});