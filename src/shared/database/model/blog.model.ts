import mongoose from "mongoose";

const blogPostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  content: {
    type: String,
    required: true,
  },
  tags: [{
    type: String,
  }],
  coverImageUrl: {
    type: String,
  },
  category: {
    type: String,
    required:true
  },
  publishedAt: {
    type: Date,
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
    required: true,
  }
}, {
  timestamps: true, // adds createdAt and updatedAt automatically
});

 const blogmodel = mongoose.models.BlogPost || mongoose.model('BlogPost', blogPostSchema);

 export default blogmodel