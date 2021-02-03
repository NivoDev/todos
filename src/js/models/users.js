const { getData, setData } = require('../file-db');

const PATH =  "users.json";

async function addUser(user) {
	const users = await getData(PATH);
	const newUserId = users[users.length - 1].id + 1;
	const newUser = { ...user, id: newUserId };
	users.push(newUser);
	await setData(PATH, users);

	return newUser;
}

async function removeUser(userId){
    const users = await getData(PATH);
    const filteredUsers = users.filter(user => user.id !== userId);
    await setData(PATH , filteredUsers);
}

async function updateUser(userId , changes ={}){
const users = await getData(PATH);
const foundUser = users.find(user => user.id === userId);

Object.assign(foundUser,changes)

await setData(PATH , users)

return foundUser;
}

async function getUser(userId){
    const users = await getData(PATH);
    return users.find(user => user.id === userId)
}

module.exports ={
    addUser,
    removeUser,
    updateUser,
    getUser
}