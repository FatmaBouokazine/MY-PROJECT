const mongoose = require("mongoose");
const schema = mongoose.Schema;

const blogSchema = new schema({
    user_id :{type:String,required:true},
    title :{type:String,required:true},
    description :{type:String,required:true},
    image :{type:String,required:true},
})

const Blog = mongoose.model("Blog",blogSchema);
module.exports = Blog;