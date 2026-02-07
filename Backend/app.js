import express, { urlencoded } from "express";
import dotenv from "dotenv";
import cors from "cors";
import Phonenum from "./models/phone.js";
import User from "./models/User.js";
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
// console.log("connected to atlas ");
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
  }),
);
// app.post("/userinfo", async (req, res) => {
//   console.log("SIGNUP BODY:", req.body);
//   try {
//     const {
//       fullName,
//       email,
//       password,
//       address,
//       country,
//       occupation,
//       dob,
//       investmentExperience,
//       termsAccepted,
//       phone,
//     } = req.body;

//     await User.create({
//       fullName,
//       email,
//       password,
//       address,
//       country,
//       occupation,
//       dob,
//       investmentExperience,
//       termsAccepted: termsAccepted,
//       phone: phone,
//     });

//     res.json({ success: true });
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).json({ error: err.message });
//   }
// });

// app.post("/CompleteSignup", async (req, res) => {
//   const { phone } = req.body;

//   let phoneDoc = await Phonenum.findOne({ phone });

//   if (!phoneDoc) {
//     phoneDoc = await Phonenum.create({ phone });
//   }
//   res.json({
//     success: true,
//     phoneId: phoneDoc._id,
//   });
//   // localStorage.setItem("phoneId", data.phoneId);
// });

app.get("/", (req, res) => {
  res.send("you have reached the slash domain");
});

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
