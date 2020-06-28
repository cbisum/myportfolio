const express = require('express')
const cors = require('cors')

const app = express()
const port = process.env.PORT || 5000

app.use(express.json())
app.use(cors())
app.use(require('./routes/All'))


//production code

if(process.env.NODE_ENV=='production'){
    app.use(express.static('myportfolio/build'))
    const path = require('path')
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname,'myportfolio','build','index.html'))
    })
}

app.listen(port,()=>{
    console.log('App is Running on port '+ port)
})