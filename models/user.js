import mongoose, { Model } from "mongoose";

// Defining Schema 

const userSchema = new mongoose.Schema({
    username:{type:String,required:true,trim:true},
    email:{type:String,required:true,trim:true},
    phone:{type:Number,required:true,trim:true ,},
    birth:{type:String,required:true,trim:true ,},
    
})


// Model
const userModel = mongoose.model('user',userSchema)


export default userModel