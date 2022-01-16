const express = require("express")
const path = require("path")
const geocode = require ("./utils/geocode")
const forecast = require ("./utils/forecast")
const { response } = require("express")

const app = express()

const publicDirectoryPath = path.join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

// app.get('', ({req, res})=>{
//     res.send("hello express!")
// })

app.get("/2nd",({req, res})=>{
    res.send("2nd page")
})

// app.use(express.static())

// Start the server
app.listen(3000, ()=>{
    console.log("server is up in port 3000");
})


app.get("/weather", (res, req)=>{
    const address = req.query.address;
    if(!address){
        return res.send({
            error:"No address provided"
        })
    }
    geocode(req.query.address, (error, {latitude, longitude, location})=>{
        if (error) {
            return res.send({error: error})
            // can also be: return res.send({error})
            // ({error: error}) == ({error})
        }
        forecast(latitude, longitude, (error, forecastData)=> {
            if(error){
                return res.send({error})
            }
            res.send({
               forecast: forecastData,
               location,
               address:req.query.address 
            })
        })

    })
    // return res.send({
    //     forecast: "bla bla",
    //     location: "new york",
    //     address: address        
    // })
})

geocode()