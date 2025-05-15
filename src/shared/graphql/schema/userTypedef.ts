
const userTypeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
    password:String!
   }

    type token{
    id: ID!
    name: String!
    email: String!
    password:String!
    token:String!
    }



  type Query {
    users:[User!]!
    user(id: ID!): User
  }
    
  type Mutation {
      createuser(name: String! ,email: String! ,password:String!):User!
      loginuser(email: String! ,password:String!):token!
  }
      

`
export default userTypeDefs