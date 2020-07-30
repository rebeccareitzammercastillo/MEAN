const mongoose = require('mongoose');

const BikeSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type:String,
        required: [true, 'Description is required'], 
        maxlength: [200, 'Description can only be 200 characters long']
    },
    price: {
        type:Number,
        required: [true, 'Price is required'],
        min: [1, 'Price must be over a $1']
    },
    location: {
        type: String,
        require: [true, 'Location is required'],
    },
    image: {
        type: String,
        require: [true, 'Image is required']
    }
}, {timestamps: true})

const Bike = new mongoose.model('Bike',BikeSchema)

module.exports={
    Bike:Bike,
    BikeSchema:BikeSchema
}