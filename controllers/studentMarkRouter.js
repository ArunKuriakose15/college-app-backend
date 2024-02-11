const express = require("express")
const router = express.Router()
const studentMarkModel = require("../model/studentMarkModel")

router.post("/addmark",async (req,res)=>{
    let data=req.body
    let markObj=new studentMarkModel(data)
    let result=await markObj.save()
    res.json({
        status:"success"
    })
})

module.exports=router