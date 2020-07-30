const { CommentSchema } = require("../models/comment")
const mongoose = require('mongoose');

const CakeSchema = new mongoose.Schema({
    name: {type: String, required:true},
    image: {type:String, required:true},
    comments:[CommentSchema]
}, {timestamps: true})

const Cake = new mongoose.model('Cake',CakeSchema)

module.exports={
    Cake:Cake,
    CakeSchema:CakeSchema
}