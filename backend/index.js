import express from "express";
import { PORT, mongoDbUrl } from "./config.js";
import mongoose from "mongoose";
import booksRouter from "./routes/booksRoute.js"
import cors from "cors";


const app = express();
app.use(express.json());

//CORS policy cors(*)
app.use(cors());

// app.use(cors({
//     origin:"http://localhost:5173",
//     methods:['GET','POST','PUT','PATCH','DELETE'],
//     allowedHeaders:['Content-Type']
// }))



app.use('/books',booksRouter)

mongoose
  .connect(mongoDbUrl)
  .then(() => {
    console.log("DB Connection successful");
    app.listen(PORT, () => {
      console.log(`Server listening at : http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
