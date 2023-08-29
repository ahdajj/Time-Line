const mongoose = require('mongoose')



  const Schema = mongoose.Schema ; 
  const PostSchema = new Schema ({
    title:{
        type:String,       
        required:true       
    },
    body: {
        type:String,
        required:true
    }
}, {timestamps: true})             

 
const Post = mongoose.model('Post' , PostSchema)    // the name must be te same as collection in database , the second argument is the schema we want to base this model on 
module.exports = Post;