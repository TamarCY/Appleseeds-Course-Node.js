const mongoose = require ("mongoose")
const Schema = mongoose.Schema;
const validator = require ("validator")


mongoose.connect("mongodb://127.0.0.1:27017/e-commerce",{})

// const Product = mongoose.model("Product", new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     },
//     category: {
//         type: String,
//         required: true,
//     },
//     isActive: {
//         type: Boolean
//     },
//     details: {
//         description: {
//             type: String,
//             required: true,
//             trim: true,
//             minLength: 10,
//         },
//         price: {
//             type: Number,
//             required: true,
//             validate (value) {
//                 if (value < 0) {
//                     throw new Error ("price must be positive")
//                 }
//             }
//         },
//         discount: {
//             type: Number,
//             default: 0
//         },
//         imagesArray: {
//             type: Array,
//             validate(value){
//                 if (value.length < 2) {
//                     throw new Error ("less then 2 images")
//                 }
//             }
//         },
//         dateAdded: {
//             type: Date,
//             default: Date.now
//         }
//     }
// })
// )


// const hat = new Product({
//     name: "Sombrero",
//     category: "fashion",
//     details: {
//         description: "cool hat you can wear it",
//         price: 50,
//         imagesArray:["hhh","7777","8888"]
//     }
// })

// hat.save().then((result)=>{
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);
// })