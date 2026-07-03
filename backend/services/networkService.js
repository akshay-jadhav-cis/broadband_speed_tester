const axios = require("axios");

async function getNetworkInfo() {

    try {

        const { data } = await axios.get(
            "https://ipapi.co/json/",
            {
                timeout: 5000
            }
        );

        return {

            ip: data.ip,

            isp: data.org,

            city: data.city,

            region: data.region,

            country: data.country_name

        };

    } catch (err) {

        console.error(err);

        return {

            ip: "Unavailable",

            isp: "Unavailable",

            city: "Unknown",

            region: "Unknown",

            country: "Unknown"

        };

    }

}

module.exports = {
    getNetworkInfo
};