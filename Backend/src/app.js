import express, {urlencoded} from "express"
import cors from 'cors'
import cookieParser from 'cookie-parser';
import authRoutes from "./routes/auth.route.js";
import morgan from 'morgan'

const app = express();

app.use(morgan('dev'));

app.use(cors({
    origin: '*', // or origin: true
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    credentials: true,
}));
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

app.use('/api/auth',authRoutes);

export {app}