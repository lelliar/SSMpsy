const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    text:{ type:String },
    description:{ type:String },
    phone:{ type:Number },
    income:{ type:mongoose.SchemaType.ObjectId , ref:'User' }
})

module.exports = mongoose.model('Program' , schema)