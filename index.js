const { addTodo, getTodo } = require('./models/todos');
const runCommand = require('./src/js/todos-cmd');


runCommand(process.argv);
