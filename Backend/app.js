import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Phonenum from "./models/phone.js";
import mongoose from "mongoose";

const app = express();
const port = 8080;
dotenv.config();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
console.log("connected to atlas ");
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
  }),
);

app.post("/otp", async (req, res) => {
  const { phone } = req.body;
  await Phonenum.create({ phone: phone });
  res.json({ success: true });
});

app.get("/", (req, res) => {
  res.send("you have reached the slash domain");
});

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
