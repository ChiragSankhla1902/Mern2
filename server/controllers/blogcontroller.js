import Blogmodel from "../models/blogmodel.js";
import mongoose from "mongoose";
import express from 'express';


const router = express.Router();


export const  getblog=async(req,res)=>{
    try {
        const blogcontent = await Blogmodel.find();
        res.status(201).json(blogcontent)
        
    } catch (error) {
        console.log(error)
        res.status(404)
    }
};

export const createblog=async(req,res)=>{
    //    const {title,message,creator,selectedFile} = req.body;
       const blog  = req.body;
    //    const newblog =new Blogmodel({title,message,creator,selectedFile});
       const newblog =new Blogmodel({...blog,creator:req.userId});
       try {
           await newblog.save();
           res.status(201).json(newblog);
       } catch (error) {
           console.log(error)
           res.status(404);
       }
};

export const updateblog=async(req,res)=>{
    
    const{id}=req.params;
    const {title,message,creator,selectedFile} = req.body;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    const updated={title,message,creator,selectedFile,_id:id}
    await Blogmodel.findByIdAndUpdate(id,updated,{new:true});
    res.send(updated);

}



export const deleteblog=async(req,res)=>{
    const{id}=req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    await Blogmodel.findByIdAndDelete(id);
    res.status(201);
}

export const likeblog=async(req,res)=>{
    const{id}=req.params

    if(!req.userId) return res.json({message:"unaunthenciated"});

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const blog = await Blogmodel.findById(id)
    const index= blog.likes.findIndex((id)=>id === String(req.userId));
    if(index === -1){
            blog.likes.push(req.userId);
    }else{
        blog.likes.filter((id)=>id !== String(req.userId) );
    }
    const liked = await Blogmodel.findByIdAndUpdate(id,blog,{new:true})
    res.status(201).json(liked)
}
export default router;