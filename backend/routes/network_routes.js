const express = require("express");

const router = express.Router();

const {

    getFooterInfo

} = require("../controller/network_controller");

router.get("/", getFooterInfo);

module.exports = router;