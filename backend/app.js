const express=require("express");
const helmet=require("helmet");
const cors=require("cors");
const download=require("./routes/download_routes");
const upload = require("./routes/upload_routes");
const ping = require("./routes/ping_routes");
const network = require("./routes/network_routes");
const app=express();
const compression=require("compression");
app.use(compression());
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=8000;
app.use("/download",download);
app.use("/upload",upload);
app.use("/ping",ping);
app.use("/network",network);
app.get("/get",(req,res)=>{
    res.json({"status":"ok"})
})
module.exports=app;