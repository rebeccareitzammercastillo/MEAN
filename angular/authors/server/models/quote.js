const mongoose =require('mongoose');

const QuoteSchema = new mongoose.Schema({
    text: {
        type:String,
        required: [true, 'Quote is required'], 
        min: [3, 'Quote must be at least characters']
    },
    votes: {
        type:Number
    }
}, {timestamps:true})

const Quote = new mongoose.model('Quote', QuoteSchema)

module.exports={
    Quote:Quote,
    QuoteSchema:QuoteSchema
}