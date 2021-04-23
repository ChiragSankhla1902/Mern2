import express from "express";

import { signin,signup} from "../controllers/usercontroller.js";

const route =express.Router();

route.post('/signin',signin)
route.post('/signup',signup)

export default route;