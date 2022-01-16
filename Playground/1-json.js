const fs = require ("fs");
const { stringify } = require("querystring");

// const book = {
//     title: "Lion",
//     author: "Ami"
// }

// const bookJSON = JSON.stringify(book)

// console.log(bookJSON);

// const parsedData = JSON.parse(bookJSON)

// console.log(parsedData.title);

// fs.writeFileSync("1-jason.json", bookJSON)

// const dataBuffer = fs.readFileSync("1-jason.json");
// const bookJSON = dataBuffer.toString();
// const book = JSON.parse(bookJSON)
// console.log(book);

const dataBuffer = fs.readFileSync("1-jason.json");
const dataJSON = dataBuffer.toString();
const dataObject = JSON.parse(dataJSON);
dataObject.name = "Tamar";
dataObject.age = 38;
const newDataJSON = JSON.stringify(dataObject);
fs.writeFileSync("1-jason.json", newDataJSON, (err)=>{if(err) {throw err}})

