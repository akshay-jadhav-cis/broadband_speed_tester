import "./Footer.css";

import useNetworkInfo from "../../hooks/useNetworkInfo";

function Footer() {

    const {
        ip,
        isp,
        city,
        region,
        country,
        server,
        serverCity,
        serverCountry
    } = useNetworkInfo();

    return (

        <footer className="footer">

            <div className="footer-grid">

                <div className="footer-item">

                    <span>IP Address</span>

                    <h3>{ip}</h3>

                </div>

                <div className="footer-item">

                    <span>ISP</span>

                    <h3>{isp}</h3>

                </div>

                <div className="footer-item">

                    <span>Location</span>

                    <h3>
                        {city}, {region}, {country}
                    </h3>

                </div>

                <div className="footer-item">

                    <span>Server</span>

                    <h3>
                        {server}
                        <br />
                        {serverCity}, {serverCountry}
                    </h3>

                </div>

            </div>

            <div className="copyright">

                © 2026 Broadband Speed Tester. All Rights Reserved.

            </div>

        </footer>

    );

}

export default Footer;