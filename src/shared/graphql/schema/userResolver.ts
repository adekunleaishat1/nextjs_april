import { usermodel } from "@/shared/database/model/user.model";
import jwt from "jsonwebtoken";

import { User } from "@/types/user.types";

const userResolvers = {
  Query:{
    users:async()=>{
      try {
        const users =  await usermodel.find()
       return users;
      } catch (error:any) {
        throw new Error(error.message)
      }
    },
  },
  Mutation:{
    createuser: async(_:any,{name, email, password}:User)=>{
        try {
          const user =  await usermodel.create({name, email, password})
          if (user) {
            return user
          }
        } catch (error:any) {
            throw new Error(error.message)
        }
    },

    loginuser:async(_:any, {email, password}:{email:string, password:string})=>{
        try {
             if (!email || !password) {
              throw new Error("input field cannot be empty")
             }
             const user = await usermodel.findOne({ email });
            //  console.log(user);
             
             if (!user || password !== user.password){
              throw new Error("User not found");
             }
              const token =  await jwt.sign({email}, process.env.SECRETKEY, {expiresIn:"1d"})
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
            
        } catch (error:any) {
          throw new Error(error.message);
        }
    },
  }
}


export default userResolvers