const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    description:{ type:String }
})

module.exports = mongoose.model('Noicebyp' , schema)