import { response } from 'express';
import jwt from 'jsonwebtoken';
import { ApiErr } from '../utils/ApiError.js';
import { asyncHandler } from '../utils/asyncHandler.js';

const verifyToken = (request, response, next)=>{
    console.log(request.cookies);

    const token = request.cookies.jwt;
    console.log({token})

    if(!token) return new ApiErr(401,"You are not Authenticated",[error.message])
        jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
            if (err) return next(new ApiErr(403, "Token is Not valid!"));
            request.userId = payload.userId;
            next();
        });
    }

export {verifyToken};
