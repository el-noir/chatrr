import { Router } from "express";
import { login, signup, getUserInfo } from "../controllers/auth.controller.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const authRoutes = Router();

authRoutes.post("/signup",(req, res, next)=>{
    console.log('Signup route hit!');
    next();
}, signup);
authRoutes.post("/login", (req, res, next)=>{
    console.log('Login route hit!');
    next();
}, login)

authRoutes.get("/user-info",(req, res, next)=>{
    console.log('user-info route hit!');
    next();
}, verifyToken, getUserInfo)

export default authRoutes;