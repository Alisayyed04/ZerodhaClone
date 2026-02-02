import mongoose from "mongoose";
import dotenv from "dotenv";
import Phone from "./models/phone.js";

dotenv.config();

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URI);

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

// Insert data
const allPhoneNumbers = [
  { phone: "9156888532" },
  { phone: "9876543210" },
  { phone: "1234567890" },
];

const inserted = await Phone.insertMany(allPhoneNumbers);
console.log("Inserted phone numbers:", inserted);
