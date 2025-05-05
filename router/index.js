const express = require("express");
const router = express.Router();

const DoctorRoute = require("./DoctorRoute");
const UserRoute = require("./UserRoute");
const User_mainRoute = require("./User_mainRoute");

router.use("/doctor", DoctorRoute);
router.use(UserRoute);
router.use("/mainuser", User_mainRoute);

module.exports = router;
