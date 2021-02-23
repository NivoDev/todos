const { Router } = require('express');

const service = require('../service/todos')
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const router = Router();
const { checkTodoPermissions } = require('../middlewares/todos')

router.get('/api/todos',async(req,res)=>{
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


router.delete('/api/todos/:todoId',checkTodoPermissions,async(req,res)=>{
    await service.removeTodo(req.todo.id);
    res.json({message: 'Todo remove succssesfully'});
})

router.post('/api/todos',jsonParser, async(req,res)=>{
    const newTodo = await service.addTodo({...req.body, user: req.user._id});
    res.json(newTodo);
});
router.put('/api/todos/:todoId',checkTodoPermissions,jsonParser,async(req,res)=>{
    const updatedTodo = await service.updateTodo(req.todo.id, {...req.body, user: req.user._id});
    res.json(updatedTodo)
});


module.exports = router;