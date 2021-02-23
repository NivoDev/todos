const { addTodo, getTodo } = require('./models/todos');
const runCommand = require('./todos-cmd');


runCommand(process.argv);
