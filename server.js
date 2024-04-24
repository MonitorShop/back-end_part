require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose")
const app = express()
const AddMonitor = require("./Controlers/AddMonitor")
const DeleteMonitor =  require("./Controlers/DeleteMonitor")
const GetMonitor =  require("./Controlers/GetMonitor")
const GetMonitors =  require("./Controlers/GetMonitors")
const UpdateMonitor =  require("./Controlers/UpdateMonitor")


app.use(express.json())

app.get("/GetMonitor/:id", (req,res) => GetMonitor)

app.get("/GetMonitors", (req,res) => GetMonitors)

app.put("/UpdateMonitor/:id", (req,res) => UpdateMonitor)

app.post("/AddMonitor", (req,res) => AddMonitor)

app.delete("/DeleteMonitor/:id", (req,res) => DeleteMonitor)



mongoose.connect("mongodb+srv://admin:I3LyVdhJ7XM0lFM4@cluster0.2oihda5.mongodb.net/")
.then(() =>{
    console.log("connected to mongo")
    app.listen(process.env.SERVER_PORT, ()=>{

        console.log(`Server listen on port ${process.env.SERVER_PORT}`)
    })
})
