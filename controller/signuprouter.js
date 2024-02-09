const express = require("express")
const signupmodel = require("../model/signupmodel")
const router = express.Router()
const bcrypt = require("bcryptjs")

hashPassGen = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post('/signup', async (req, res) => {
    let { data } = { "data": req.body }
    let password = data.password
    hashPassGen(password).then(
        (hashPass) => {

            data.password = hashPass

            let signup = new signupmodel(data)
            let result = signup.save()
            res.json({ status: "success" })
            console.log(data)
        }
    )
})

router.post('/signin',(req,res)=>{
    let input=req.body
    
})

module.exports = router