const { getNetworkInfo } = require("../services/networkService");

const serverInfo = require("../utils/serverInfo");

const getFooterInfo = async (req, res) => {

    try {

        const network = await getNetworkInfo();

        res.json({

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