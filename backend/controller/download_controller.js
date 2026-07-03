const DownloadStream = require("../services/streamGenerator");

const startDownload = (req, res) => {

    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Connection", "keep-alive");

    const stream = new DownloadStream();

    stream.pipe(res);

    // Stop after 10 seconds
    setTimeout(() => {
        stream.destroy();
        res.end();
    }, 10000);

    req.on("close", () => {
        stream.destroy();
    });
};

module.exports = {
    startDownload
};