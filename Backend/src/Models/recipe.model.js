import mongoose, { Schema } from "mongoose";

const recipeSchema = new mongoose.Schema(
  {
    recipeNo: { type: String, unique: true },
    productsID: { type: [{ type: mongoose.Schema.Types.ObjectId, ref: "productsID" }] },
    status: { type: Boolean, default: true },
    totalCost: { type: Number, default: "0" },
    userID: { type: Schema.Types.ObjectId }
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("Recipe", recipeSchema);