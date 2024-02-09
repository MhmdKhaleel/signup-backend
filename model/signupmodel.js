const mongoose=require("mongoose")
const signupschema=mongoose.Schema(
    {
        name:String,
        age:String,
        mobileno:String,
        address:String,
        pincode:String,
        email:String,
        password:String
    }
)

module.exports=mongoose.model("signup",signupschema)