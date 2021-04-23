import mongoose from "mongoose";

const BlogSchema =mongoose.Schema({
    title:String,
    message:String,
    name:String,
    creator:String,
    selectedFile:String,
    likes:{
        type:[String],
        default:[],
    },
});

const Blogmodel=mongoose.model("blogcon",BlogSchema);

export default Blogmodel;