const express=require("express")
const signupmodel=require("../model/signupmodel")
const router=express.Router()
const bcrypt=require("bcryptjs")

hashPassGen=async(pass)=>{
    const salt= await bcrypt.genSalt(10)
    return bcrypt.hash(pass,salt)
}

router.post('/signup',async(req,res)=>{
    let {data}={"data":req.body}
    let password=data.password
    hashPassGen(password).then(
        (hashPass)=>{
            console.log(hashPass)
        }
    )

    console.log(data)
    // let signup=new signupmodel(data)
    // let result=await signup.save()
    res.json({status:"success"})
})

module.exports=router