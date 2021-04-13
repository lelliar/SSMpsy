const mongoose = require('mongoose')

const schema = new mongoose.Schema({
        id:{ type:String },
        longitude:{ type:Number },
        latitude:{ type:Number }
})

module.exports = mongoose.model('Wei' , schema)

