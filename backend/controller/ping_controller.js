const ping = (req, res) => {

    res.setHeader("Cache-Control", "no-store");

    res.status(200).json({
        success: true,
        timestamp: Date.now()
    });

};

module.exports = {
    ping
};