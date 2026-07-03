const axios = require("axios");

const serverInfo = require("../utils/serverInfo");

const getFooterInfo = async (req, res) => {

    try {

        // Get Client IP
        let clientIp =
            req.headers["x-forwarded-for"]?.split(",")[0] ||
            req.ip ||
            req.socket.remoteAddress;

        // Localhost Handling
        if (
            clientIp === "::1" ||
            clientIp === "127.0.0.1" ||
            clientIp.startsWith("::ffff:127.")
        ) {

            clientIp = "";

        }

        let network = {

            ip: clientIp || "Unknown",

            isp: "Unknown",

            city: "Unknown",

            region: "Unknown",

            country: "Unknown"

        };

        if (clientIp) {

            const { data } = await axios.get(

                `https://ipapi.co/${clientIp}/json/`,

                {
                    timeout: 5000
                }

            );

            network = {

                ip: data.ip || clientIp,

                isp: data.org || "Unknown",

                city: data.city || "Unknown",

                region: data.region || "Unknown",

                country: data.country_name || "Unknown"

            };

        }

        res.status(200).json({

            success: true,

            ip: network.ip,

            isp: network.isp,

            city: network.city,

            region: network.region,

            country: network.country,

            server: serverInfo.name,

            serverCity: serverInfo.city,

            serverCountry: serverInfo.country

        });

    } catch (err) {

        console.error(err);

        res.status(500).json({

            success: false,

            message: "Unable to fetch network information"

        });

    }

};

module.exports = {
    getFooterInfo
};