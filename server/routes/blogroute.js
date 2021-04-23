import express from "express";
import auth from "../middleware/authware.js";
import {getblog,createblog,updateblog,deleteblog,likeblog} from "../controllers/blogcontroller.js";

const route =express.Router();

route.get('/',getblog);
route.post('/create',auth,createblog);
route.patch('/:id',auth,updateblog);
route.delete('/:id',auth,deleteblog);
route.patch('/:id/liked',auth,likeblog)


export default route;