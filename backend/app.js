const express=require("express");
const helmet=require("helmet");
const cors=require("cors");
const download=require("./routes/download_routes");
const app=express();
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
const port=8000;
app.use("/download",download);
app.get("/",(req,res)=>{
    res.send("<H1>Home Directory Working <\H1>");
})
module.exports=app;