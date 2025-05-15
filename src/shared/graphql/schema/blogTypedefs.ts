
const blogTypeDefs = `
 
  type BlogPost {
  id: ID!
  title: String!
  slug: String!
  content: String!
  tags: [String!]!
  coverImageUrl: String
  publishedAt: DateTime
  author: User!
  category:String!
  createdAt: DateTime!
  updatedAt: DateTime!
}

scalar DateTime

input CreateBlogPostInput {
  title: String!
  content: String!
  tags: [String!]!
  coverImageUrl: String!
  category:String!
}

  type Query {
   getallblog(limit: Int!, offset: Int!):[BlogPost!]!
  }
    
  type Mutation {
     createBlogPost(input: CreateBlogPostInput!):BlogPost!
  }
      

`

export default blogTypeDefs