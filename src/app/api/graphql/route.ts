import { ApolloServer } from "@apollo/server";
import {startServerAndCreateNextHandler} from "@as-integrations/next"
import { connect } from "@/shared/database/db.connect";
import jwt from "jsonwebtoken";
import { typeDefs, resolvers } from "@/shared/graphql/schema";
import { NextRequest } from "next/server";



const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const handler = startServerAndCreateNextHandler<NextRequest>(server,{
  context:async(req)=>{
    const authheader =  req.headers.get("authorization")
    const token = authheader?.split(" ")[1]
     if (!token) {
      return {}
     }
     try {
      const user = await jwt.verify(token, process.env.SECRETKEY);
      return {user}
     } catch (error) {
       console.log(error)
       return {}
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