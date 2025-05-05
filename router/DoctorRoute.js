const express = require("express");
const router = express.Router();

const {adddoc, deletedoc, getdocdata} = require("../controller/DoctorController");



router.post("/adddoc",  adddoc);

router.delete("/deletedoc",  deletedoc);

router.get("/getdocdata/id/:id",  getdocdata);

module.exports = router;