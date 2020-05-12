const express = require('express')

const router=express.Router()

const Contact=require('../models/Contact')

router.post('/',async(req,res)=>{
    const {name,email,phone}=req.body

    try{

        const newContact= new Contact({
            name,
            email,
            phone
        })

        await newContact.save()
        res.json(newContact)
    } catch(err) {
        console.error(err.message);
        
    }
})


module.exports=router