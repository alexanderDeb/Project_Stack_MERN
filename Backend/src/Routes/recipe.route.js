import { Router } from "express";
import { createRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../Controllers/recipe.controller.js";

const router = Router();

router.get("/recipes", getRecipes);
router.get("/recipe/:id", getRecipe);
router.post("/recipe", createRecipe);
router.delete("/recipe/:id", deleteRecipe);
router.put("/recipe/:id", updateRecipe);

export default router;
