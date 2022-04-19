import express from "express";
import dotenv from "dotenv";
import connectDatabase from "./config/MongoDb.js";
import ImportData from "./DataImport.js";
import productRoute from "./Routes/ProductRoutes.js";
import { errorHandler, notFound } from "./Middleware/Errors.js";
import userRouter from "./Routes/UserRoutes.js";

dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

// API
app.use("/api/import", ImportData);
app.use("/api/reports", productRoute);
app.use("/api/users", userRouter);


// ERROR HANDLER
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`server run in port ${PORT}`));