const express = require("express");

const upload = express.Router();


const {
    startUpload
} = require("../controller/upload_controller");



upload.post("/", startUpload);

module.exports = upload;