const mongoose = require("mongoose")
const studentSchema = mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            required:true,
            ref:"students"
        },
        mark1:{
            type:String,
            required:true
        },
        mark2:{
            type:String,
            required:true
        },
        mark3:{
            type:String,
            required:true
        },
        mark4:{
            type:String,
            required:true
        },
        mark5:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("studentMarks",studentSchema)



