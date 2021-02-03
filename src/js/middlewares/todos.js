const {getTodo} = require('../models/todos');

async function checkTodoPermissions(req,res,next){
    const todo = await getTodo(Number(req.params.todoId));
    if(todo && todo.userId === req.userId){
        req.todo = todo
        next()
    }else{
        res.status(403).json({message: "You are not allowed to make this operation"})
    }
}
module.exports={
    checkTodoPermissions
}