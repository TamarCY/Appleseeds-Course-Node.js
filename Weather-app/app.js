const request = require ("request")
const express = require (express)
const app = express()

const url = "https://dog.ceo/api/breeds/image/random"

request ({
    url: url, json:true}, (error, response)=>{
        // const data = JSON.parse(response.body)
        // json:true gives back the request as a jason like in axios
        error? console.log("something went wrong"):
        console.log(response.body);
        // If there is an error it will be stored in error and response will be empty
        // If there isnt an error the response will fill
    })


//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (number1, number2, callback) => {
    setTimeout(()=>{
        const result = number1+number2;
        callback(result)
    },2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})



app.get("/")