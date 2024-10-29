import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: { type: String, unique: true },
    image: { type: String },
    description: { type: String },
    price: { type: Number },
    barCode: { type: Number },
    status: { type: Boolean, default: true },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Products", productSchema);
