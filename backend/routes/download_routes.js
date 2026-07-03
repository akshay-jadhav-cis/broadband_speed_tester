const express = require("express");
const router = express.Router();

const {
    startDownload
} = require("../controller/download_controller");

router.get("/", startDownload);

module.exports = router;