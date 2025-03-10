import { User } from "../models/user.model.js";
import jwt from "jsonwebtoken";
import { ApiErr } from "../utils/ApiError.js";
import { ApiRes } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import bcrypt from "bcryptjs";
import { request } from "express";

const maxAge = 3 * 24 * 60 * 60 * 1000;

const createToken = (email, userId) => {
    return jwt.sign({ email, userId }, process.env.JWT_KEY, { expiresIn: maxAge });
};

const signup = asyncHandler(async (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return next(new ApiErr(400, "Email and Password are required."));
    }

    try {
        const user = await User.create({ email, password });

        res.cookie("jwt", createToken(email, user.id), {
            maxAge,
            secure: true,
            sameSite: "None",
        });

        return res
            .status(201)
            .json(new ApiRes(201, { id: user.id, email: user.email, profileSetup: user.profileSetup }, "User created successfully"));
    } catch (error) {
        return next(new ApiErr(500, "Internal Server Error", [error.message]));
    }
});

const login = asyncHandler(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
      return next(new ApiErr(400, "Email and Password are required."));
  }

  try {
      const user = await User.findOne({ email});
      if(!user){
        return new ApiErr(404, "User with the given email not found.")
      }

      const auth = await bcrypt.compare(password, user.password);

      if(!auth){
        return ApiErr(400, "Password is incorrect.");
      }

      res.cookie("jwt", createToken(email, user.id), {
          maxAge,
          secure: true,
          sameSite: "None",
      });

      return res
          .status(200)
          .json(new ApiRes(200, { id: user.id, email: user.email, profileSetup: user.profileSetup, firstName: user.firstName, lastName: user.lastName, image: user.image, color: user.color }, "Login Successfully"));
  } catch (error) {
      return next(new ApiErr(500, "Internal Server Error", [error.message]));
  }
});

const getUserInfo = asyncHandler(async (req, res, next) => {
   
  try{
    const userData = await User.findById(req.userId);

    if(!userData){
        return new ApiErr(404, "User with given id not found");
    }
        return res
            .status(200)
            .json(new ApiRes(200, { id: userData.id, email: userData.email, profileSetup: userData.profileSetup, firstName: userData.firstName, lastName: userData.lastName, image: userData.image, color: userData.color }, "Login Successfully"));
    } catch (error) {
        return next(new ApiErr(500, "Internal Server Error", [error.message]));
    }
  });
  

export { signup, login, getUserInfo };
