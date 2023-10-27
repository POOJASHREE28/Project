const mongoose=require('mongoose')
const DetailsSchema=new mongoose.Schema({
    name:String,
    email:String,
    password:String

})
const DetailsModel=mongoose.model("details",DetailsSchema)
module.exports=DetailsModel