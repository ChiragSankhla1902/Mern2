import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import route from "./routes/blogroute.js";
import userauth from "./routes/userauth.js";

const app=express();

app.use(bodyparser.json({limit:"100mb",extended:true}));
app.use(bodyparser.urlencoded({limit:"100mb",extended:true}));
app.use(cors());

app.use('/Blog',route);
app.use('/user',userauth);


const PORT =process.env.PORT || 5000;
console.log(process.env.dataurl)
const url= "mongodb+srv://user1:1902@proj@cluster0.m1nrk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose.connect(url,{useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>app.listen(PORT,()=>console.log(`Server running on ${PORT}`)))
    .catch(()=>console.log(error));

mongoose.set('useFindAndModify',false);