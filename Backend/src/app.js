import express from "express";
import morgan from "morgan";
import cors from "cors";
import { ConnectDB } from "./db.js";
import RecipeRouter from "./Routes/recipe.route.js";
import UserRouter from "./Routes/user.route.js";
import ProductRouter from "./Routes/product.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use(RecipeRouter);
app.use(UserRouter);
app.use(ProductRouter);

ConnectDB();
app.listen(8000);
console.log("Server is running in the port: ", 8000);
