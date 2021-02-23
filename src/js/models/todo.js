const {Schema} = require('mongoose');

const ObjectId = Schema.ObjectId;
const TodoSchema = new Schema({
    title:{ 
        type: String,
        required: true,

    },
    description:{
         type: String,
         required: true
        },
    isDone:{
         type: Boolean,
         default: ()=>false
        },
    user:{
        type: ObjectId,
        ref: 'user',
    },
    created:{
        type: Date,
        default: Date.now
    },
    updated: Date
});

const Todo = mode('Todo', TodoSchema);

module.exports = Todo;