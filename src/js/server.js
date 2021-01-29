
const model = require('./todo-model')
const express = require('express');
const { query } = require('express');
const app = express();

app.get('/api/todos',async(req,res)=>{
    const filters = {};
    if(req.query.isDone){
        filters.isDone = req.query.isDone === 'true';
    }
    if(req.query.title){
        filters.title === req.query.title;
    }
 
    const todos = await model.getTodos(filters)
    res.json(todos);
});
app.delete('/api/todos/:todoId',async(req,res)=>{
    await model.removeTodo(Number(req.params.todoId));
    res.json({message: 'Todo remove succssesfully'});
})

app.post('/api/todos',async(req,res)=>{
    await model.addTodo(req.todo);
    res.json(todo);
});

app.pus('/api/todos/:todoId',async(req,res)=>{
    await model.updateTodo(Number(req.params.todoId));
    res.json({changes})
});


app.listen(3000 , ()=> console.log('app is running'));

