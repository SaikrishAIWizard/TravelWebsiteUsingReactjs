const nodemailer = require('nodemailer');
const express = require("express")
const cors = require("cors")
const collection = require("./mongo")
const app=express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())

// Create a transporter using SMTP settings
const transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'vijayasatya369@gmail.com',
        pass: 'qovwdbtiicmdqnrr',
    },
});

app.get("/",cors(),(req,res) => {

})

app.post("/",async(req,res)=>{
    const {email} = req.body
    const {name} = req.body
    const {address} = req.body
    const {phone} = req.body
    const {Amount} = req.body
    const data = {
        msg : email,
        name : name,
        address : address,
        phone : phone,
        Amount : Amount
    }
    await collection.insertMany([data])

    // Define email content
    const mailOptions = {
    from: 'vijayasatya369@gmail.com',
    to: 'vijayasatya369@gmail.com',
    subject: 'Hello from Char Dham Yatra',
    text: `Namaste! This is an alert email from the Char Dham Yatra. \n New user details they are looking to start their trip with your team
    Name:${name}
    mail:${email}
    Package:${address}
    Phone Number:${phone}
    Amount Paid : ${Amount}
    `,
        };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Error sending email:', error);
            } else {
            console.log('Email sent:', info.response);
            }
        });


})

app.listen(8000,()=>{
    console.log("port connected 8000")
})



