import {app} from './app.js'
import dotenv from 'dotenv'
import { connectDB } from './db/index.js';

dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.on('error',(error)=>{
    console.log("Error: ", error)
    })

    // start the server
    const PORT = process.env.PORT || 3000;

    app.listen(PORT, () => {
    console.log(`Server running on port http://localhost:${PORT}`);
    });
})
.catch((err)=>{
    console.error("Connection failed: ", err);
})

