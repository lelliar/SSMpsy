const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    description: { type:String },
    User:{ type:mongoose.SchemaTypes.ObjectId , ref:'User' }
})

module.exports = mongoose.model('AnnouncementbyPs' , schema)