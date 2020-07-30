
const mongoose = require('mongoose')
const QuoteSchema = new mongoose.Schema({
    name: { type: String, required: true},
    quote: { type: String, required: true},
}, {timestamps: true})

const Quote = mongoose.model('Quote', QuoteSchema);

module.exports = {
    Quote:Quote,
    QuoteSchema:QuoteSchema
}