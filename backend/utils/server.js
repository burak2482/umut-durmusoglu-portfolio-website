import express from "express"
import cors from "cors"
import dbConnect from "./database/db.js";
import router from "./routes/router.js";
import dotenv from 'dotenv';
import loginRouter from "./routes/loginRouter.js";

dotenv.config();

dbConnect();


const app = express();
const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/portfolio', router);
app.use('/user', loginRouter);


app.listen(5000, () => {
  console.log("Server started on port 5000");
});