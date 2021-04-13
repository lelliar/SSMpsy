const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    money:{ type:Number },
    createTime: {
        type: Date,
        default: Date.now
    },
})

module.exports = mongoose.model('Income' , schema)