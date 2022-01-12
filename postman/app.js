const express = require("express");
const app = express();

const port = 3000;

const numbersArray = [1, 2, 3, 4, 5, 6];

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});

// app.<http header>("<route>",(req,res)=>{
//     <Callback function that specifies what we need to do when the specific route is accessed>
//     });

// app.get("/numbers",(req,res)=> res.status(200).send({message: "success using get"}))

app.get("/", (req, res) => res.send(numbersArray));

app.post("/numbers/:num", (req, res) => {
  const num = +req.params.num;
  if (numbersArray.includes(num)) {
    res.status(400).send(`${num} all ready exist`);
  } else {
    numbersArray.push(num);
    res.send(numbersArray);
  }
});

// app.get('/users/:userId/books/:bookId', function (req, res) {
//     res.send(req.params)
//   })

// app.post("/", (req, res) =>
// res
// .status(200)
// .json({ message: "You can post to this endpoint !",
// app:"Express-Routes"}));

app.put("/numbers", (req, res) => {
  const {num1, num2} = req.query;
  if (!numbersArray.includes(num1)){
      res.status(400).send(`${num1} is not in the data`)
  }
//   const number2 = +req.query.num2;
  const index = numbersArray.indexOf(num1);
  numbersArray[index] = num2;
  res.send(numbersArray);
});
// localhost:3000/numbers?num1=5&num2=9

app.delete("/numbers/:num", (req, res) => {
  const num = +req.params.num;
  if(!numbersArray.includes(num)){
    res.status(400).send(`${num} is not in the data`);
  } else {
  const index = numbersArray.indexOf(num);
  numbersArray.splice(index, 1);
  res.send(numbersArray);
  }
});
