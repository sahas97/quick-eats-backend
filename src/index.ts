import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";
import mongoose from "mongoose";
import { v2 as cloudinary } from "cloudinary";
import myUserRoute from "./routes/MyuserRoutes";
import myRestaurantRoute from "./routes/MyRestaurantRoute";
import resturantRoute from "./routes/RestuarantRoute";
import orderRoute from "./routes/OrderRoute";

mongoose
  .connect(process.env.MONGODB_CONNECTION_STRING as string)
  .then(() => console.log("Connected to database"));

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

// handle cors attks
app.use(cors());

app.use("/api/order/checkout/webhook", express.raw({ type: "*/*" }));
// convert any request to sever to JSON
app.use(express.json());

app.get("/health", async (req: Request, res: Response) => {
  res.send({ message: "health OK!" });
});

app.use("/api/my/user", myUserRoute);
app.use("/api/my/restaurant", myRestaurantRoute);
app.use("/api/restaurant", resturantRoute);
app.use("/api/order", orderRoute);

app.listen(8000, () => {
  console.log("Server started on port 8000");
});
