const express = require("express");
const router = express.Router();
const SecondHandController = require("../controller/SecondHandCarController");

router.post("/add_car_detail",SecondHandController.add_second_hand_car_detail);
router.get("/get_car_detail",SecondHandController.get_car_detail);

module.exports = router;
