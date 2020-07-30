const mongoose = require('mongoose')
const PoodleSchema = new mongoose.Schema({
    name: String,
    color: String,
    age: Number
})

const Poodle = mongoose.model('Poodle', PoodleSchema);

module.exports = {
    Poodle:Poodle,
    PoodleSchema:PoodleSchema
}