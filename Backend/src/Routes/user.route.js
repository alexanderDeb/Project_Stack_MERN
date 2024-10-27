import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUser,
  getUsers,
  login,
  updateUser,
} from "../Controllers/user.controller.js";

const router = Router();

router.get("/users", getUsers);
router.get("/user/:id", getUser);
router.put("/user/:id", updateUser);
router.delete("/user/:id", deleteUser);
router.post("/user", createUser);
router.get("/login/:email", login);

export default router;
