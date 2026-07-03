const DownloadStream = require("../services/streamGenerator");

const startDownload = (req, res) => {
    res.setHeader("Content-Type", "application/octet-stream");
    res.setHeader("Cache-Control", "no-store");

    const stream = new DownloadStream();

    const timer = setTimeout(() => {
        stream.destroy();

        if (!res.writableEnded) {
            res.end();
        }
    }, 10000);

    req.on("close", () => {
        clearTimeout(timer);
        stream.destroy();
    });

    stream.pipe(res);
};

module.exports = { startDownload };