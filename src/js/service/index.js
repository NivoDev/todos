const mongoose = require('mongoose');


function connect(mongoUri){
    require('./users');
    require('./todos');
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