import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    phone: { type: String,  },
    email: { type: String,  },
    status: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
