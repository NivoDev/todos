const {getTodo} = require('../service/todos');

const checkTodoPermissions = async (req,res,next) => {
    const todo = await getTodo(Number(req.params.todoId));
    if(todo && todo.userId === req.user.id){
        req.todo = todo
        next()
    }else{
        res.status(403).json({message: "You are not allowed to make this operation"})
    }
}
module.exports={
    checkTodoPermissions
}