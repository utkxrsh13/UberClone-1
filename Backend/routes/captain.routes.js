const express = require("express");
const router = express.Router();
const { body } = require("express-validator");
const captainController = require("../controllers/captain.controller");
const { authCaptain } = require("../middlewares/auth.middleware");

router.post(
  "/register",
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("fullname.firstname")
      .isLength({ min: 3 })
      .withMessage("first name must be at least of 3 characters"),
    body("fullname.lastname")
      .isLength({ min: 3 })
      .withMessage("last name must be at least of 3 characters"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least of 3 characters"),
    body("vehicle.color")
      .isLength({ min: 3 })
      .withMessage("Color must be at least of 3 characters"),
    body("vehicle.plate")
      .isLength({ min: 3 })
      .withMessage("Plate must be at least of 3 characters"),
    body("vehicle.capacity")
      .isLength({ min: 1 })
      .withMessage("Capacity must be at least of 3"),
    body("vehicle.vehicleType")
      .isIn(["car", "motorcyvle", "auto"])
      .withMessage("Invalid Vehicle Type"),
  ],
  captainController.registerCaptain
);
router.post(
  "/login",
  [
    body("email").isEmail().withMessage("Invalid Email!"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least of 3 characters"),
  ],
  captainController.loginCaptain
);

router.get("/profile", authCaptain, captainController.getCaptainProfile);
router.get("/logout",authCaptain, captainController.logoutCaptain)

module.exports = router;
