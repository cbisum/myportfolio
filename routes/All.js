const express = require('express')
const router = express.Router()
const nodemailer = require('nodemailer')
const sendgridtransport =require('nodemailer-sendgrid-transport')
const {api_key} = require('../config/decider')

const transporter = nodemailer.createTransport(sendgridtransport({
    auth:{
        api_key
    }
}))



router.post('/sendmail',(req,res)=>{
    const { name, email, subject, body} = req.body

    if(!email || !body){
        return res.json({
            message:"Please Enter all the required field"
        })
    }
 
    transporter.sendMail({
        to:'cbshrestha24@gmail.com',
        from:email,
        subject:subject?subject:'Related to code',
        html:`<p>${name?name:'Anonymous'} has send you a message: <br/> ${body}</p>`

    })
    res.json({
        message:"Thank yo for Message. Will be in touch soon. "
    })
})











module.exports = router

