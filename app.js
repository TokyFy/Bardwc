import express from 'express';
import morgan from 'morgan';
import cors from "cors";
import OnirixRoute from "./Routes/OnirixRoute.js";

const app = express();

app.use(cors())

app.use(express.json());

app.use(morgan("dev"))

app.use('/api/rest/onirix' , OnirixRoute)

// app.all('*' , (req , res)=>{
//     res.status(404).sendFile(path.join(__dirname, './Page/404/404.html'));
// })

export default app;