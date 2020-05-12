const express = require("express")
const mongoose = require("mongoose")
const contact = require('./routes/contacts')

const app=express()




const db="mongodb://localhost:27017/workshopmongoose"

mongoose.connect(db,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() =>console.log("mongodb connected")).catch(err => console.log(err))

app.use(express.json())
app.use('/contacts',contact)




const port=process.env.PORT || 5000

app.listen(port,err => {
    if (err) console.log(`failed to connect`)
    else console.log(`you are connected on ${port} ...`)
})