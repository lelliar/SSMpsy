module.exports = app=>{
    const mongoose = require('mongoose')
    mongoose.connect('mongodb://127.0.0.1:27017/SsmPsd11',{
        useNewUrlParser:true,
        useUnifiedTopology: true
    })
}