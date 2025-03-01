import mongoose from "mongoose";
import {genSalt} from bcrypt;
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
        
},{timestamps: true});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) return next();
    
    const salt = await bcrypt.genSalt(10); // Specify salt rounds
    this.password = await bcrypt.hash(this.password, salt);

    next();
});

export const User = mongoose.model('User', userSchema);