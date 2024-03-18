import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/ResturentController";

const router = express.Router();

http://localhost:8000/api/resturant/:restaurantId
router.get(
    "/:restaurantId",
    param("restaurantId")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("RestaurantId paramenter must be a valid string"),
    RestaurantController.getRestaurant
  );
  
  http://localhost:8000/api/resturant/search/:city
  router.get(
    "/search/:city",
    param("city")
      .isString()
      .trim()
      .notEmpty()
      .withMessage("City paramenter must be a valid string"),
    RestaurantController.searchRestaurant
  );
  
  export default router;