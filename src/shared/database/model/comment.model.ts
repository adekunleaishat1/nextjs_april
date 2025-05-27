
import mongoose from "mongoose";

const commentschema = new mongoose.Schema({
    comment:{type:String, required:true,},
    user:{type:mongoose.Schema.Types.ObjectId, ref: "user", required:true}
},{timestamps:true})

const commentModel =  mongoose.models.comment || mongoose.model("comment", commentschema)

export default commentModel