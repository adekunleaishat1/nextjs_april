import { usermodel } from "@/shared/database/model/user.model";
import blogmodel from "@/shared/database/model/blog.model";
import cloudinary from "@/shared/lib/cloudinary";
import slugify from "slugify";
import { BlogInput } from "@/types/blog.types";
import { handleError } from "@/shared/utils/handlError";
import {ContextType} from "@/types/context.types";

const blogResolvers = {
  Query:{
    getallblog:async(_:unknown, {limit, offset}:{limit:number, offset:number}) =>{
      try {
        const blogs = await blogmodel.find()
          .skip(offset)
          .limit(limit)
          .sort({ createdAt: -1 }); // Optional: Sort by latest
    
        return blogs;
      } catch (error) {
        handleError(error)
      }
    },
    getoneblog:async(_:unknown,{slug}:{slug:string}) =>{
      try {
       const oneblog = await blogmodel.findOne({slug})
       return oneblog

      } catch (error) {
        handleError(error)
      }
    },
    searchBycategory:async (_:unknown, {category,limit, offset}:{category:string, limit:number, offset:number})=>{
      try {
        const seenBlog =  await blogmodel.find({category})
          .skip(offset)
          .limit(limit)
          .sort({ createdAt: -1 })

          if (seenBlog) {
            return seenBlog
          }

      } catch (error) {
        handleError(error)
      }
    }
  
  },

  Mutation:{
    createBlogPost:async(_:unknown, args:{input:BlogInput} , context:ContextType ) => {
       try {
        const { input } = args;
        const { user } = context;
        console.log(user, "usertoken");
        
        if (!user || !user.email) {
          throw new Error("Unauthorized");
        }
        const {tags, title , content, coverImageUrl, category } = input
        if (!tags || !title || !content || !coverImageUrl || !category) {
           throw new Error("input field cannot be empty")
        }
        const uploadedimg =  await cloudinary.uploader.upload(coverImageUrl)

          if (uploadedimg) {
           const slug = await slugify(title,{
             replacement: '-',  // replace spaces with replacement character, defaults to `-`
              lower: true,      // convert to lower case, defaults to `false`
              strict: false,     // strip special characters except replacement, defaults to `false`
              trim: true    
           })
            const author =  await usermodel.findOne({email:user.email})
            const newblog =  await blogmodel.create({
                title,
                content,
                tags,
                coverImageUrl:uploadedimg?.secure_url,
                author:author?._id,
                category,
                slug,
              })

              return newblog
          }
       } catch (error) {
        handleError(error)
       }
    },
    deleteBlogPost:async(_:unknown, {slug}:{slug:string}, context:ContextType)=>{
      try {
        const { user } = context;
        console.log(user, "usertoken");
        
        if (!user || !user.email) {
          throw new Error("Unauthorized");
        }
        const authordetail =  await usermodel.findOne({email:user.email})
        if (!authordetail) {
          throw new Error("Blog post can only deleted by author");
        }
        const authorvalidated =  await blogmodel.findOne({author:authordetail._id}) 
        if (authorvalidated) {
          const deleted = await blogmodel.deleteOne({slug})
            if (deleted) {
              return deleted
            }
            throw new Error("Unable to delete blog");
        }
      } catch (error) {
        handleError(error)
      }
    },
    editBlogPost:async(_:unknown, args:{input:BlogInput, id:string} , context:ContextType )=>{
       try {
        const { input ,id} = args;
        const { user } = context;
        
        if (!user || !user.email) {
          throw new Error("Unauthorized");
        }
        const validuser = await usermodel.findOne({email:user.email})

         const validateauthor =   await blogmodel.findOne({author:validuser._id})
        
        if (!validateauthor) {
          throw new Error("Only author can edit this blog post");
        }

        const {tags, title , content, coverImageUrl, category } = input
        if (!tags || !title || !content || !coverImageUrl || !category) {
           throw new Error("input field cannot be empty")
        }
        const uploadedimg =  await cloudinary.uploader.upload(coverImageUrl)
         
        if (uploadedimg) {
          const slug = await slugify(title,{
            replacement: '-',  // replace spaces with replacement character, defaults to `-`
             lower: true,      // convert to lower case, defaults to `false`
             strict: false,     // strip special characters except replacement, defaults to `false`
             trim: true    
          })
        const updatedBlog =  await blogmodel.findByIdAndUpdate(
            id,
            {$set:{
              title,
                content,
                tags,
                coverImageUrl:uploadedimg?.secure_url,
                author:validateauthor?._id,
                category,
                slug,}
              }
          )

          if (updatedBlog) {
            return updatedBlog
          }
        }
       } catch (error) {
        handleError(error)
       }
    }
  }
}

export default blogResolvers