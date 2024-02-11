const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const studentRoutes=require("./controllers/studentRouter")
const studentMarkRoutes=require("./controllers/studentMarkRouter")

const app=express()
app.use(express.json())
app.use(cors())

app.use("/api/student",studentRoutes)
app.use("/api/studmark",studentMarkRoutes)

mongoose.connect("mongodb+srv://arun:arun123@cluster0.5bjnd.mongodb.net/collegeDb?retryWrites=true&w=majority",
    { useNewUrlParser: true })

app.listen(3005,()=>{
   console.log("Server Running...")
})