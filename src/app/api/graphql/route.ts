import { ApolloServer } from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next"
import { connect } from "@/shared/database/db.connect";
import jwt from "jsonwebtoken";
import { typeDefs, resolvers } from "@/shared/graphql/schema";
import { NextRequest } from "next/server";
import { handleError } from "@/shared/utils/handlError";



const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server,{
  context:async(req)=>{
     try {
      const authheader =  req.headers.get("authorization")
      const token = authheader?.split(" ")[1]
      if (!token) {
        return {}
       }
      const user = await jwt.verify(token, process.env.SECRETKEY!);
      console.log(user);
      
      return {user}
     } catch (error) {
      console.log(error)
      handleError(error)
     }
  } 
})





export async function GET(req: Request) {
    return handler(req);
  }
  
export async function POST(req: Request) {
    return handler(req);
 }

 connect()