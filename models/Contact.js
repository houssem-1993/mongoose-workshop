const mongoose = require ("mongoose")

const Schema = mongoose.schema
    const ContactSchema = new Schema({
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true
        },
        phone:{
            type:Number,
            required:true
        }
    })

module.exports=Contact=mongoose.model("contact",ContactSchema)