const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    userName:{ type:String },
    address:{ type:String },
    time:{ type:String },
    userPhone:{ type:Number },
    price:{ type:Number },
    firstName:{ type:String },
    orderId:{ type:String },
    userId:{ type:mongoose.SchemaTypes.ObjectId , ref:'User' }
})

module.exports = mongoose.model('Order' , schema)