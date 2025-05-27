import { usermodel } from "@/shared/database/model/user.model";
import jwt from "jsonwebtoken";
import { User } from "@/types/user.types";
import { handleError } from "@/shared/utils/handlError";

const userResolvers = {
  Query:{
    users:async()=>{
      try {
        const users =  await usermodel.find()
       return users;
      } catch (error) {
        handleError(error)
      }
    },
  },
  Mutation:{
    createuser: async(_:unknown,{name, email, password}:User)=>{
        try {
          const user =  await usermodel.create({name, email, password})
          if (user) {
            return user
          }
        } catch (error) {
          handleError(error)
        }
    },

    loginuser:async(_:unknown, {email, password}:{email:string, password:string})=>{
        try {
             if (!email || !password) {
              throw new Error("input field cannot be empty")
             }
             const user = await usermodel.findOne({ email });
            //  console.log(user);
             
             if (!user || password !== user.password){
              throw new Error("User not found");
             }
              const token =  await jwt.sign({email}, process.env.SECRETKEY!, {expiresIn:"1d"})
              console.log(token,"usertoken");
              if (token) {
                const data = {
                  id:user._id,
                  name:user.name,
                  email:user.email,
                  password:user.password,
                  token:token
                }
                console.log(data)
                return  data
              }
            
        } catch (error) {
          handleError(error)
        }
    },
  }
}


export default userResolvers