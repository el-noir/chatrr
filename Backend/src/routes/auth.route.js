import { Router } from "express";
import { login, signup } from "../controllers/auth.controller.js";

const authRoutes = Router();

authRoutes.post("/signup",(req, res, next)=>{
    console.log('Signup route hit!');
    next();
}, signup);
authRoutes.post("/login", (req, res, next)=>{
    console.log('Login route hit!');
    next();
}, login)
export default authRoutes;