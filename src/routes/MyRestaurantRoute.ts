import express from "express";
import MyRestaurantController from "../controllers/MyRestauantController";
import multer from "multer";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateMyRestaurantRequest } from "../middleware/validation";

const router = express.Router();

const strorage = multer.memoryStorage();
const upload = multer({
  storage: strorage,
  limits: {
    fieldSize: 5 * 1024 * 1024, //5mb
  },
});

http://localhost:8000/api/my/resturant
router.get(
  "/",
  jwtCheck,
  jwtParse,
  MyRestaurantController.getMyRestaurant
);

http://localhost:8000/api/my/resturant
router.post(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.createMyResturent
);

http://localhost:8000/api/my/resturant
router.put(
  "/",
  upload.single("imageFile"),
  validateMyRestaurantRequest,
  jwtCheck,
  jwtParse,
  MyRestaurantController.updateMyRestaurant
);

export default router;
