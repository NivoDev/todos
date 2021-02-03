
const model = require('./todo-model')
const express = require('express');
const { query } = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const userModel = require('./models/users')
const {checkUserHeaders, checkExistUser} = require('./middlewares/auth');
const {checkTodoPermissions} = require('./middlewares/todos');

//middleware user
app.use(checkUserHeaders);
app.use(checkExistUser);

app.get('/api/todos',async(req,res)=>{
    const filters = {
        userId: req.userId
    };
    if(req.query.isDone){
        filters.isDone = req.query.isDone === 'true';
    }
    if(req.query.title){
        filters.title === req.query.title;
    }
 
    const todos = await model.getTodos(filters)
    res.json(todos);
});


app.delete('/api/todos/:todoId',checkTodoPermissions,async(req,res)=>{
    await model.removeTodo(req.todo.id);
    res.json({message: 'Todo remove succssesfully'});
})

app.post('/api/todos',jsonParser, async(req,res)=>{
    const newTodo = await model.addTodo({...req.body, userId: req.user.id});
    res.json(newTodo);
});

app.put('/api/todos/:todoId',checkTodoPermissions,jsonParser,async(req,res)=>{
    const updatedTodo = await model.updateTodo(req.todo.id, {...req.body, userId: req.user.id});
    res.json(updatedTodo)
});


app.listen(3000 , ()=> console.log('app is running on https://Localhost:3000'));

