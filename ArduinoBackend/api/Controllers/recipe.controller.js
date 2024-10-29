import mongoose from "mongoose";
import Recipe from "../Models/recipe.model.js";

export const getRecipes = async (req, res) => {
  const recipe = await Recipe.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "userRecipe",
      },
    },
    { $unwind: "$userRecipe" },
    {
      $lookup: {
        from: "products",
        localField: "productsID",
        foreignField: "_id",
        as: "productsRecipe",
      },
    },
  ]);
  res.json(recipe);
};

export const getRecipe = async (req, res) => {
  const recipe = await Recipe.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userID",
        foreignField: "_id",
        as: "userRecipe",
      },
    },
    { $unwind: "$userRecipe" },
    {
      $lookup: {
        from: "products",
        localField: "productsID",
        foreignField: "_id",
        as: "productsRecipe",
      },
    },
    { $match: { _id: new mongoose.Schema.Types.ObjectId(req.params.id) } },
  ]);
  if (!recipe)
    return res.status(404).json({ message: "Factura no encontrada" });
  res.json(recipe);
};

export const createRecipe = async (req, res) => {
  const { userID, recipeNo, productsID, status, totalCost } = req.body;
  const objectId = new mongoose.Types.ObjectId(userID);
  const NewRecipe = new Recipe({
    userID: objectId,
    recipeNo: recipeNo,
    productsID: productsID,
    status: status,
    totalCost: totalCost,
  });
  console.log(NewRecipe);
  const saveRecipe = await NewRecipe.save();
  res.json(saveRecipe);
};

export const deleteRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndDelete(req.params.id);
  if (!recipe)
    return res.status(404).json({ message: "Factura no encontrada" });
  res.json(recipe);
};

export const updateRecipe = async (req, res) => {
  const recipe = await Recipe.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  if (!recipe)
    return res.status(404).json({ message: "Factura no encontrada" });
  res.json(recipe);
};
