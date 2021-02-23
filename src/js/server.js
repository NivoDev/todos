const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const todoRoutter = require('./routes/todos')
const { checkUserHeaders, checkExistUser} = require('./middlewares/auth')
const {connect} = require('./service');

connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/todos')
.then(()=> console.log('MongoDB is Connected'))
.catch(() => {
    console.log('MongoDB is no connected')
    process.exit(1);
});

const app = express();

//middlewares examples:
app.use(morgan('combined'));
app.use(cors());
app.use(checkUserHeaders);
app.use(checkExistUser);

app.use(todoRoutter)
    
router.listen(process.env.PORT || 3000, ()=> console.log('app is running on https://Localhost:3000'));

