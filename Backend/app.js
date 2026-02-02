import express, { urlencoded } from "express";
import dotenv from "dotenv";

const app = express();
const port = 8080;
dotenv.config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/otp", (req, res) => {
  const phonenumber = new PhNumber({ phone: req.body.phone });
  res.send(`here is your ${phonenumber}`);
});

app.get("/", (req, res) => {
  res.send("you have reached the slash domain");
});

app.listen(port, () => {
  console.log(`Listening on port number ${port}`);
});
