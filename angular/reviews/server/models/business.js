const { ReviewSchema } = require("../models/review")
const mongoose =require('mongoose');

const BusinessSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Business name is required'], 
        minlength: [3, 'Business name must be at least 3 characters']
    },
    address: {
        type:String,
        required: [true, 'Business address is required'],
    },
    description: {
        type: String,
        required: [true, 'Business description is requires'],
        minlength: [5, 'Business description must be at least 5 characters']
    },
    reviews: [ReviewSchema]
}, {timestamps:true})

const Business = new mongoose.model('Business', BusinessSchema)

module.exports={
    Business:Business,
    BusinessSchema:BusinessSchema
}