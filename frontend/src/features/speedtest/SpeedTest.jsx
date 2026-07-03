import "./SpeedTest.css";

import SpeedGauge from "../../components/SpeedGauge/SpeedGauge";
import Button from "../../components/Button/Button";
import ResultCard from "../../components/ResultCard/ResultCard";
import LiveChart from "../../components/LiveChart/LiveChart";

function SpeedTest() {
  return (
    <div className="speed-container">

      <div className="heading">

        <h1>Broadband Speed Tester</h1>

        <p>Test your internet speed in real time</p>

      </div>

      <div className="gauge-section">
        <SpeedGauge speed={0} />
      </div>

      <Button />

      <div className="metrics">

        <ResultCard
          title="DOWNLOAD"
          value="0.00"
          unit="Mbps"
          color="#00C8FF"
        />

        <ResultCard
          title="UPLOAD"
          value="0.00"
          unit="Mbps"
          color="#9B4DFF"
        />

        <ResultCard
          title="PING"
          value="0"
          unit="ms"
          color="#20E64A"
        />

        <ResultCard
          title="JITTER"
          value="0"
          unit="ms"
          color="#FF9800"
        />

      </div>

      <LiveChart />

    </div>
  );
}

export default SpeedTest;