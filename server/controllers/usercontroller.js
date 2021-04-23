import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import Userinfo from "../models/usermodel.js";

export const signin=async(req,res)=>{

    const {email,password}=req.body;
    try {
        const existinguser =await Userinfo.findOne({email});
        if(!existinguser) return res.status(404).json({message:"User dont exist"});
        const Passwordcheck=await bcrypt.compare(password,existinguser.password);
        if(!Passwordcheck) return res.status(404).json({message:"Invalid credentials"});

        const token= jwt.sign({email:existinguser.email,id:existinguser._id},'test',{expiresIn:"1h"});

        res.status(200).json({result:existinguser,token});

    } catch (error) {

        res.status(500).json({message:"Something went wrong"})
        
    }

}

export const signup=async(req,res)=>{

    const {email,password,confirmPassword,FirstName,LastName}=req.body;
    try {
        const existinguser= await Userinfo.findOne({email});
        if(existinguser) return res.status(400).json({message:"User already exist"});
        if(password !== confirmPassword) return status(400).json({message:"Password dont match"});
        
        const hashpassword= await bcrypt.hash(password,12)

        const result = await Userinfo.create({email,password:hashpassword,name:`${FirstName}${LastName}`});
        const token= jwt.sign({email:result.email,id:result._id},'test',{expiresIn:"1h"});
        res.status(200).json({result,token});


    } catch (error) {

        res.status(500).json({message:"Something went wrong"})
        
    }

}