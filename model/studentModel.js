const mongoose = require("mongoose")
const studentSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        rollno:{
            type:String,
            required:true
        }, 
        admno:{
            type:String,
            required:true
        }, 
        clgName:{
            type:String,
            required:true
        }, 
        parentName:{
            type:String,
            required:true
        }, 
        phone:{
            type:String,
            required:true
        }, 
        email:{
            type:String,
            required:true
        }, 
        password:
        {
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("students",studentSchema)


