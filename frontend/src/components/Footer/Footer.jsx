import { FaGlobe, FaServer } from "react-icons/fa";
import { MdWifi } from "react-icons/md";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-info">

        <div className="footer-card">
          <FaGlobe className="footer-icon blue" />

          <div>
            <p>Your IP Address</p>
            <h4>--</h4>
          </div>
        </div>

        <div className="footer-card">
          <MdWifi className="footer-icon purple" />

          <div>
            <p>ISP</p>
            <h4>--</h4>
          </div>
        </div>

        <div className="footer-card">
          <FaServer className="footer-icon green" />

          <div>
            <p>Server</p>
            <h4>--</h4>
          </div>
        </div>

      </div>

      <div className="copyright">
        © 2026 Broadband Speed Tester. All Rights Reserved.
      </div>

    </footer>
  );
}

export default Footer;