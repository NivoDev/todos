
const model = require('./todo-model')
const express = require('express');
const { query } = require('express');
const app = express();

app.get('/api/todos',async(req,res)=>{
    const filters = {};
    if(req.query.isDone){
        filters.isDone = req.query.isDone === 'true';
    }
    if(req.query.content){
        filters.content === req.query.content;
    }
 
    const todos = await model.getTodos(filters)
    res.json(todos);
});
app.delete('/api/todos/:todoId',async(req,res)=>{
    await model.removeTodo(Number(req.params.todoId));
    res.json({message: 'Todo remove succssesfully'});
})

app.listen(3000 , ()=> console.log('app is running'));

