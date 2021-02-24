const {getTodo} = require('../service/todos');

const checkTodoPermissions = async (req,res,next) => {
    const todo = await getTodo(req.params.todoId, req.user._id);
    if(todo){
        req.todo = todo
        next()
    }else{
        res.status(403).json({message: "You are not allowed to make this operation"})
    }
}
module.exports={
    checkTodoPermissions
}