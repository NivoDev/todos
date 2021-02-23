const { ObjectId } = require('mongoose')
const User = require('../model/users');

async function getUser(userId){
    return User.findById(userId)
}


module.exports ={
    getUser
}