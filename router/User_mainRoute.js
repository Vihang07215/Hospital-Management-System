const express = require("express");
const router = express.Router();

const {deleteuser, getuserdata, getUserInfo, login, register} = require("../controller/User_mainController");



router.delete("/deleteuser",  deleteuser);

router.get("/getuser/id/:id",  getuserdata);

router.post("/getUserInfo",  getUserInfo);

router.post("/login",  login);

router.post("/register",  register);

module.exports = router;