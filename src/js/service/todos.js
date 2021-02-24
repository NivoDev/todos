require('../file-db')
const { getData, setData } = require('../file-db');
const Todo = require('../models/todo')

function addTodo(todo) {
	const newTodo = new Todo(todo);
	return newTodo.save();
}

async function removeTodo(todoId){
    const todos = await getData(TODOS_PATH);
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    await setData(TODOS_PATH , filteredTodos);
}


function getTodos(filters = {}){
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

function getTodo(todoId, userId){
    return Todo.findOne({_id: todoId, user: userId});
}
module.exports ={
    addTodo,
    removeTodo,
    getTodos,
    getTodo
}