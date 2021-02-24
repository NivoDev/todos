require('../file-db')
const { getData, setData } = require('../file-db');
const Todo = require('../models/todo')
const TODOS_PATH =  "todos.json";

function addTodo(todo) {
	const newTodo = new Todo(todo);
	return newTodo.save();
}

async function removeTodo(todoId){
    const todos = await getData(TODOS_PATH);
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    await setData(TODOS_PATH , filteredTodos);
}

async function updateTodo(todoId , changes ={}){
const todos = await getData(TODOS_PATH);
const foundTodo = todos.find(todo => todo.id === todoId);

Object.assign(foundTodo,changes)

await setData(TODOS_PATH , todos)

return foundTodo;
}

async function getTodos(filters = {}){
    const query = {};
    if('isDone' in filters){
        query.isDone = filters.isDone;
    }
    if('title' in filters){
        query.title = new RegExp(filters.title,'i');
    }
    if('description' in filters){
        query.description = new RegExp(filters.description,'i');
    }

    if('user' in filters){
        query.user = filters.user;
    }

    return Todo.find(query);
}

async function getTodo(todoId){
    const todos = await getData(TODOS_PATH);
    return todos.filter(todo => todo.id !== todoId);

}
module.exports ={
    addTodo,
    removeTodo,
    updateTodo,
    getTodos,
    getTodo
}