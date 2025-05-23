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
  }
}

export default blogResolvers