import mongoose from "mongoose";

const MONGO_URI = process.env.MONGODB!
console.log(MONGO_URI,"HELLO Y IS THIS NOT WORKING");

export const connect = async() =>{
 try {
  if (!MONGO_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }
   const connection =  await mongoose.connect(process.env.MONGODB!)
   if (connection) {
    console.log("database connected successfully");
    
   }
 } catch (error) {
    console.log(error);
    
 }
}

