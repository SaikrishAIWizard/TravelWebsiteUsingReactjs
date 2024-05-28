const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/react-login-tut")
.then(()=>{
    console.log("connected")
})
.catch(()=>{
    console.log("failed");
})

const newSchema = new mongoose.Schema({
    msg:{
        type: String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required: false
    },
    phone:{
        type:Number,
        required: true
    },
    Amount :{
        type:Number,
        required: true
    }

})

const collection = mongoose.model("collection",newSchema)

module.exports = collection