import mongoose from "mongoose";

const PhoneSchema = new mongoose.Schema(
  {
    phone: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  },
);

const Phonenum = mongoose.model("Phone", PhoneSchema);
export default Phonenum;
