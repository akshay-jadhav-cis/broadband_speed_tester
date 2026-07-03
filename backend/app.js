require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const compression = require("compression");

const download = require("./routes/download_routes");
const upload = require("./routes/upload_routes");
const ping = require("./routes/ping_routes");
const network = require("./routes/network_routes");

const app = express();

// Middlewares
app.use(helmet());

app.use(compression());

app.use(cors({
    origin: [
        "http://localhost:5000",
        process.env.FRONTEND_URL
    ].filter(Boolean),
    credentials: true
}));

app.use(express.json());

app.use(express.urlencoded({
    extended: true
}));

// Routes
app.use("/download", download);
app.use("/upload", upload);
app.use("/ping", ping);
app.use("/network", network);

// Health Check
app.get("/", (req, res) => {

    res.status(200).json({
        success: true,
        message: "Broadband Speed Tester API Running"
    });

});

module.exports = app;