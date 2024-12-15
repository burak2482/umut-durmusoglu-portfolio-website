import express from "express"
import cors from "cors"
import dbConnect from "./database/db.js";
import router from "./routes/router.js";
import dotenv from 'dotenv';
import loginRouter from "./routes/loginRouter.js";
import path from 'path';
import { fileURLToPath } from 'url';
dotenv.config();

dbConnect();


const app = express();

app.use(cors());

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// portfolyophotos klasörünü statik olarak ayarla
app.use('/portfolyophotos', express.static(path.join(__dirname, '../frontend/public/portfolyophotos')));

app.use(express.json());

app.use('/portfolio', router);
app.use('/user', loginRouter);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});