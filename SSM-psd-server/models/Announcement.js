const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    type:{ type:String },
    url:{ type:String },
    title:{ type:String },
    description: { type:String },
})

module.exports = mongoose.model('Announcement' , schema)