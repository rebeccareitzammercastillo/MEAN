const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    rating: {
        type: Number,
        // required:true
    },
    review: {
        type:String,
        // required: [true, 'Review is required'],
        // minlength: [5, 'Review must be at least 5 characters']
    }
    }, {timestamps: true})

const Review = new mongoose.model('Review',ReviewSchema)

module.exports={
    Review:Review,
    ReviewSchema:ReviewSchema
}
