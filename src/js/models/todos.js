const { getData, setData } = require('./file-db')

require('./file-db');

const PATH =  "todos.json";

async function addTodo(todo) {
	const todos = await getData(PATH);
	const newTodoId = todos[todos.length - 1].id + 1;
	const newTodo = { ...todo, id: newTodoId };
	todos.push(newTodo);
	await setData(PATH, todos);

	return newTodo;
}

async function removeTodo(todoId){
    const todos = await getData(PATH);
    const filteredTodos = todos.filter(todo => todo.id !== todoId);
    await setData(PATH , filteredTodos);
}

async function updateTodo(todoId , changes ={}){
const todos = await getData(PATH);
const foundTodo = todos.find(todo => todo.id === todoId);

Object.assign(foundTodo,changes)

await setData(PATH , todos)

return foundTodo;
}

async function getTodos(filters = {}){
    const todos = await getData(PATH);

    return todos.filter(todo => {
        let result = true;
        if('isDone' in filters){
            result = result && todo.isDone === filters.isDone;
        }
        if('title' in filters){
            result = result && new RegExp(filters.title,'i').test(todo.title)
        }
        if('id' in filters){
            result = result && todo.id === filters.id;
        }
        if('userId' in filters){
            result = result && todo.userId === filters.userId;
        }

        return result;
    })

}

async function getTodo(todoId){
    const todos = await getData(PATH);

    return todos.filter(todo => todo.id !== todoId);

}
module.exports ={
    addTodo,
    removeTodo,
    updateTodo,
    getTodos,
    getTodo
}