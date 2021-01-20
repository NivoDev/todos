const { getData, setData } = require('./file-db')

require('./file-db');

const PATH =  "todos.json";

async function addTodo(todo){
    const todos = await getData(PATH);
    todos.push(todo);
    await setData(PATH , todos);
    // return getData(PATH)
    // .then(todos => {
    //     todos.push(todo)
    //     return todos;
    // })
    // .then(todos => setData(PATH),todos);
}

async function removeTodo(todoId){
    const todos = await getData(PATH);
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    await setData(PATH , filteredTodos);
}

function updateTodo(todoId , changes){
//find
}

function getTodos(filters = {}){
//filteer is done
}
module.exports ={
    addTodo,
    removeTodo
}