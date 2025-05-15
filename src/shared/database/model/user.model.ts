import mongoose from "mongoose";
const userschema = new mongoose.Schema({
    name:{type:String, required:true},
    email:{type:String, unique:true, required:true},
    password:{type:String, required:true}
},{timestamps:true})

export const usermodel = mongoose.models.users || mongoose.model("users", userschema)