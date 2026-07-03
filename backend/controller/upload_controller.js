const startUpload = (req, res) => {

    req.setTimeout(0);

    res.setHeader("Cache-Control", "no-store");
    res.setHeader("Connection", "keep-alive");

    let uploadedBytes = 0;

    req.on("data", (chunk) => {
        uploadedBytes += chunk.length;
    });

    req.on("end", () => {

        if (!res.writableEnded) {

            res.status(200).json({
                success: true,
                uploadedBytes
            });

        }

    });

    req.on("aborted", () => {
        console.log("Upload aborted by client.");
    });

    req.on("close", () => {
        // Client disconnected
    });

    req.on("error", (err) => {

        console.error(err);

        if (!res.headersSent) {
            res.status(500).json({
                success: false,
                message: "Upload failed"
            });
        }

    });

};

module.exports = {
    startUpload
};