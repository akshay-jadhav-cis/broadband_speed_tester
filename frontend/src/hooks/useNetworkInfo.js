import { useEffect, useState } from "react";

import { getNetworkInfo } from "../api/network";

export default function useNetworkInfo() {

    const [networkInfo, setNetworkInfo] = useState({

        ip: "...",

        isp: "...",

        city: "...",

        region: "...",

        country: "...",

        server: "...",

        serverCity: "...",

        serverCountry: "..."

    });

    useEffect(() => {

        async function load() {

            try {

                const data =
                    await getNetworkInfo();

                setNetworkInfo(data);

            } catch (err) {

                console.error(err);

            }

        }

        load();

    }, []);

    return networkInfo;

}