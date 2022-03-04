var todos = [];

function  Todo(name) {
    this.name = name;
    this.completed = false;
}

function addNewTodoWithName(name){
    var t = new Todo(name);
    todos.push(t);
}

function removeTodoAtIndex(index){
    todos.splice(index,1);
}

function getTodoAtIndex(index) {
    return todos[index];
}

function  listTodos() {
    var html = "";
    for (var i in todos) {
        
        var todo = todos[i];
        var name = todo.name;
        var completed = todo.completed;
        html += "<li>"+name+"<span>"+completed+"</span></li>";
    }
}