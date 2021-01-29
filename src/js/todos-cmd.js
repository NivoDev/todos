const model = require('./todo-model');

module.exports = function runCommand([ _ , __ , action , value = '' , extraValue ]){
    switch(action){
        case 'get' : printFilteredTodos(); break;
        case 'delete' : deleteTodo(value); break;
        case 'add' : addTodo(value, extraValue); break;
        case 'done' : setTodoAsDone(value); break ;
        case 'undone' : setTodoAsUnDone(value); break;

    }
  
    
}

async function printFilteredTodos(filterString){
    const filters = {};
    if(filterString.includes ('done')){
        filters.isDone = true;
    }
    if(filterString.includes(open)){
        filters.isDone === false;
    }
    if(('isDone' in filters) && filterString){
        filters.title = filterString
    }
    const todos = await model.getTodos(filters)
    
    console.table(todos);
}
async function deleteTodo(id){
   await model.removeTodo(Number(id)); 
   console.log('item deleted succssesfully')
}
async function addTodo(title, extra){
    const newTodo = await model.addTodo({title, isDone: extra === 'done'});

    console.table([newTodo])
}
async function setTodoAsDone(id){
    await model.updateTodo(Number(id) , {isDone: true})
}
async function setTodoAsUnDone(id){
        await model.updateTodo(Number(id) , {isDone: true})
}