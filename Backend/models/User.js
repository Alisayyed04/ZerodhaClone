import mongoose from "mongoose";
const UserSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
      match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // simple email validation
    },

    password: {
      type: String,
      required: true,
      minlength: 6, // you can increase for security
    },

    address: {
      type: String,
      required: true,
      minlength: 30,
      maxlength: 300,
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    occupation: {
      type: String,
      required: true,
      trim: true,
    },

    dob: {
      type: Date,
      required: true,
    },

    investmentExperience: {
      type: String,
      enum: ["beginner", "intermediate", "expert"],
      required: true,
    },

    termsAccepted: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true, // adds createdAt and updatedAt automatically
  },
);

const User = mongoose.model("User", UserSchema);
export default User;
