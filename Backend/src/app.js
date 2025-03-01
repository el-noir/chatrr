import express, {urlencoded} from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.route.js";
const app = express();

app.use(cors({
    origin: [process.env.ORIGIN],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials:true,
}))
app.use(express.json({
    limit: '16kb',
}));

app.use(express.urlencoded({
    extended: true,
    limit: '16kb',
}))

app.use(express.static("public"));

app.use(cookieParser(
    
));

app.use('/api/v1/auth',authRoutes);

export {app}