const express = require("express")
const router = express.Router()
const studentModel = require("../model/studentModel")
const studentMarkModel = require("../model/studentMarkModel")
const bcrypt = require("bcryptjs")

hashedPasswordGenerator = async (pass) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(pass, salt)
}

router.post("/studentadd", async (req, res) => {
    let { data } = { "data": req.body }
    let passwrd = data.password
    const hashedPassword = await hashedPasswordGenerator(passwrd)
    data.password = hashedPassword
    let studObj = new studentModel(data)
    let result = studObj.save()
    res.json({
        status: "success"
    })
})

router.post("/studentlogin", async (req, res) => {

    let eMail = req.body.email
    let data = await studentModel.findOne({ "email": eMail })

    if (!data) {
        return res.json({ status: "invalid username" })
    }

    let dbPassword = data.password
    let inputPassword = req.body.password
    const match = await bcrypt.compare(inputPassword, dbPassword)

    if (!match) {
        return res.json({ status: "invalid password" })
    }


    return res.json({ status: "success", "studData": data })

})

router.get("/viewall", async (req, res) => {
    let data = await studentModel.find()
    res.json(data)
})

router.get("/viewallmark", async (req, res) => {
    let data = await studentMarkModel.find()
    .populate("userId","-_id")
    .exec()
    res.json(data)
})

module.exports=router