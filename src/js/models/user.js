const {Schema} = require('mongoose');

const ObjectId = Schema.ObjectId;
const UserSchema = new Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    bio: String,
    created: Date
})


const User = mode('User', TodoSchema);

module.exports = User;