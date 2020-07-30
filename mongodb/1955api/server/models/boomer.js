const mongoose = require('mongoose');

const BoomerSchema = new mongoose.Schema({
    name: String,
}, {timestamps: true})

const Boomer = new mongoose.model('Boomer',BoomerSchema)

module.exports={
    Boomer:Boomer,
    BoomerSchema:BoomerSchema
}