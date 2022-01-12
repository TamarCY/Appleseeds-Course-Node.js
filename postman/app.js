const express = require ("express");
const app = express();

const port = 3000;

app.listen(port, ()=>{
    console.log(`App running on port ${port}`);
})




// app.<http header>("<route>",(req,res)=>{
//     <Callback function that specifies what we need to do when the sepcific route is accessed>
//     });

app.get("/numbers",(req,res)=> res.status(200).send({message: "success using get"}))


// app.get("/",(req,res)=> res.send({message: "HELLO"}))

app.post("/numbers",(req,res)=> res.send("success using post"))

// app.post("/", (req, res) =>
// res
// .status(200)
// .json({ message: "You can post to this endpoint !",
// app:"Express-Routes"}));

app.put("/numbers",(req,res)=> res.send("success using put"))

app.delete("/numbers",(req,res)=> res.send("success using delete"))
