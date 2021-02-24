const { Router } = require('express');
const service = require('../service/todos')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const todosRouter = Router();
const { checkTodoPermissions } = require('../middlewares/todos')

todosRouter.get('/api/todos',async(req,res)=>{
    const filters = {
        user: req.user._id
    };
    if(req.query.isDone){
        filters.isDone = req.query.isDone === 'true';
    }
    if(req.query.title){
        filters.title === req.query.title;
    }
    if(req.query.description){
        filters.description === req.query.description;
    }
 
    const todos = await service.getTodos(filters)
    res.json(todos);
});


todosRouter.delete('/api/todos/:todoId',checkTodoPermissions,async(req,res)=>{
    await req.todo.remove();
    res.json({message: 'Todo remove succssesfully'});
})

todosRouter.post('/api/todos',jsonParser, async(req,res)=>{
    const newTodo = await service.addTodo({...req.body, user: req.user._id});
    res.json(newTodo);
});
todosRouter.put('/api/todos/:todoId',checkTodoPermissions,jsonParser,async(req,res)=>{
    const todo = req.todo;
    const {title, description , isDone} = req.body;
    todo.updated = new Date();
    

    if(typeof isDone === 'boolean'){
        todo.isDone = isDone
    }
    if(title){
        todo.title = title;
    }
    if(description){
        todo.description = description;
    }
    await todo.save()
    
    res.json(todo)
});


module.exports = todosRouter;