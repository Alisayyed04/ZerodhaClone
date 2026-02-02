import mongoose from "mongoose";
const PhoneSchema = new mongoose.Schema({
  phone: {
    type: Number,
    required: true,
  },
});

const Phone = mongoose.model("Phone", PhoneSchema);
export default Phone;
