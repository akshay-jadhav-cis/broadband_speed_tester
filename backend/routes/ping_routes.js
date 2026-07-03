const { ping } = require("../controller/ping_controller");
const express=require("express");
const router=express.Router();
router.get("/", ping);
module.exports=router;