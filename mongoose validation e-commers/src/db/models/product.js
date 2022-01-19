const mongoose = require ("mongoose")
const validator = require ("validator")

const Product = mongoose.model("Product", {
    name: {
        type: String,
        required: true,
        unique: true
    },
    category: {
        type: String,
        required: true,
    },
    isActive: {
        type: Boolean
    },
    details: {
        description: {
            type: String,
            required: true,
            trim: true,
            minLength: 10,
        },
        price: {
            type: Number,
            required: true,
            validate (value) {
                if (value < 0) {
                    throw new Error ("price must be positive")
                }
            }
        },
        discount: {
            type: Number,
            default: 0
        },
        imagesArray: {
            type: Array,
            validate(value){
                if (value.length < 2) {
                    throw new Error ("less then 2 images")
                }
            }
        },
        dateAdded: {
            type: Date,
            default: Date.now
        }
    }
})


module.exports = Product