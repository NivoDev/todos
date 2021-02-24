const mongoose = require('mongoose');


function connect(mongoUri){
    require('../service/users');
    require('../service/todos');
    return mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
}

module.exports ={
    connect
}