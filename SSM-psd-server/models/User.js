const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    head:{ type:String },
    name:{ type:String },
    video:{ type:String },
    nickname:{ type:String },
    username:{ type:Number },
    test:{ type:Number },
    password:{ type:String  , select:false,  set(val){
        return require('bcrypt').hashSync(val , 10)
    }},
    notice:{ type:String },
})

module.exports = mongoose.model('User' , schema)