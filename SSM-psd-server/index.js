const express = require('express')
const app = express()

app.set('secret' , 'asf89sdfa9123fsa')

app.use(express.json())
app.use(require('cors')())
app.use('/uploads' , express.static(__dirname + '/uploads'))

require('./plugins/db')(app)
require('./routes/index')(app)

app.listen(3006 , ()=>{
    console.log('http://localhost:3006')
})