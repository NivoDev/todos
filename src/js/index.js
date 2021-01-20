const db = require('./file-db')
const model = require('./todo-model')
const runCommand = require('./todos-cmd');

runCommand(process.argv);