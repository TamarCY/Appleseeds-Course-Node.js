 
const fs = require("fs")

// fs.writeFileSync("test.txt","lets use node")

// function callback(err) {
//     if (err) throw err;
//     console.log('source.txt was copied to destination.txt');
// }


// fs.copyFile("test.txt","copy.txt", callback)


// fs.rename("copy.js", "newName.js", (err)=> {if(err) throw err; console.log("Reamed");});

// fs.readdir("./",(err, data) => {
//     if (err) throw err;
//     console.log(data);
//   })


fs.appendFileSync("copy.txt","This is the copy",(err)=>{if(err)throw err})
