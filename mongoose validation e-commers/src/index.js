const express = require ("express")
const Product = require ("./db/models/product")

require("./db/mongoose.js")


const app = express()
const port = process.env.PORT || 4000

app.use(express.json())

app.get("/products", (req,res)=> {
    Product.find({}).then((products)=>{
        res.status(200).send(products)
    }).catch((e)=>{
        console.log(e);
        res.status(500).send({error: e.massage})
    })
})

app.get("/products/between",(req,res)=>{
    Product.find({"details.price":{$gt:100,$lt:120}}).then((product)=>{
        res.status(200).send(product)
    }).catch((e)=>{
        res.status(400).send({error: e.massage})
    })
})


app.get("/products/active",(req,res)=>{
    Product.find({category: "fashion" }).then((products)=>{
        res.status(200).send(products)    
    }).catch ((e)=>{
        res.status(400).send({error: e.massage})
    })
    }
)


app.get("/products/:id",(req,res)=>{
    const _id = req.params.id
    Product.findById(_id).then((product)=>{
        res.status(200).send(product)
    }).catch((e)=>{
        res.status(400).send({error: e.massage})
    })
})



app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})


