const { QuoteSchema } = require("../models/quote")
const mongoose =require('mongoose');

const AuthorSchema = new mongoose.Schema({
    name: {
        type:String,
        required: [true, 'Name is required'], 
        minlength: [3, 'Name must be at least characters']
    },
    quotes: [QuoteSchema]
}, {timestamps:true})

const Author = new mongoose.model('Author', AuthorSchema)

module.exports={
    Author:Author,
    AuthorSchema:AuthorSchema
}