const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    rating: {type: Number, required:true},
    comment: {type:String, required:true},
}, {timestamps: true})

const Comment = new mongoose.model('Comment',CommentSchema)

module.exports={
    Comment:Comment,
    CommentSchema:CommentSchema
}