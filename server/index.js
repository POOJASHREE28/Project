
const express = require("express")
const mongoose = require('mongoose')
const cors=require("cors")

const DetailsModel=require('./models/Details')

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://poojapoojashree00:poojapoojashree00@cluster0.hokyiv8.mongodb.net/?retryWrites=true&w=majority")


app.post('/login',(req,res)=>{
    const{email,password}=req.body;
    DetailsModel.findOne({email:email})
    .then(user=>{
        if(user){
            if(user.password===password){
                res.json("Success")
            }else{
                res.json("the password is incorrect")
            }
        }else{
            res.json("No record existed")
        }
    })
})

app.post("/signup", (req,res)=>{
        DetailsModel.create(req.body)
        .then(fleetdetails=>res.json(fleetdetails))
        .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("server is running")
})

