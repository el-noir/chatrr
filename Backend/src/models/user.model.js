import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
        email: {
            type: String,
            required: [true, "Email is required."],
            unique: true,
        }, 
        password: {
            type: String,
            required: [true, "Password is required."],
        }, 
        firstName: {
            type: String, 
            required: false,
        },
        lastName: {
            type: String, 
            required: false,
        },
            image: {
            type: String, 
            required: false,
        },
        color: {
            type: Number,
            required: false
        }, 
        profileSetup: {
            type: Boolean,
            default: false,
        }
        
})

export const User = mongoose.model('User', userSchema);