import express from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtPrase } from "../middleware/auth";
import { validateMyUserRequest } from "../middleware/validation";

const router = express.Router();

http://localhost:8000/api/my/user
router.get("/", jwtCheck, jwtPrase, MyUserController.getCurrentUser)
router.post("/", jwtCheck, MyUserController.createCurrentUser);
router.put(
  "/",
  jwtCheck,
  jwtPrase,
  validateMyUserRequest,
  MyUserController.updateCurrentuser
);

export default router;
