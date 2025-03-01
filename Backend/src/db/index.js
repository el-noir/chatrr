import mongoose from 'mongoose'
import { DB_NAME } from "../constants.js";

const connectDB = async()=> {
    try{
       console.log(`Connecting to: ${process.env.MONGODB_URL}`);
       const connectionInstance = await mongoose.connect(process.env.MONGODB_URL.trim(), {

       });
       console.log(`\nMongoDB connected ~~ DB HOST : ${connectionInstance.connection.host}`);
    }catch(error){
     console.error("MongoDB connection failed: ", error);
     process.exit(1);
    }
}

export {connectDB};
