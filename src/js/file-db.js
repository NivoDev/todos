const { promisify } = require('util');
const fs = require('fs');

const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

function getData(path){
return readFile(path)
    .then(data => data.toString())
    .then(json => JSON.parse(json));
}

function setData(path,data){
    return writeFile(path,JSON.stringify(data));
}

module.exports ={
    getData,
    setData
}