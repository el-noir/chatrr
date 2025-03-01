import {app} from './app.js'
import dotenv from 'dotenv'

dotenv.config({
    path: './.env'
})


const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
console.log(`Server running on port http://localhost:${PORT}`);
});

