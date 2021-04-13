const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    icon:{ type:String },
    type:{ type:String }
})

module.exports = mongoose.model('Background' , schema)