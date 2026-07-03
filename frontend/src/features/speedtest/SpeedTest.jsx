import "./SpeedTest.css";

import SpeedGauge from "../../components/SpeedGauge/SpeedGauge";
import Button from "../../components/Button/Button";
import ResultCard from "../../components/ResultCard/ResultCard";
import LiveChart from "../../components/LiveChart/LiveChart";

import useSpeedTest from "../../hooks/useSpeedTest";

function SpeedTest() {

  const {
    download,
    upload,
    ping,
    jitter
  } = useSpeedTest();

  return (
    <div className="speed-container">

      <div className="heading">
        <h1>Broadband Speed Tester</h1>
        <p>Test your internet speed in real time</p>
      </div>

      <div className="gauge-section">
        <SpeedGauge speed={download} />
      </div>

      <Button />

      <div className="metrics">

        <ResultCard
          title="DOWNLOAD"
          value={download.toFixed(2)}
          unit="Mbps"
        />

        <ResultCard
          title="UPLOAD"
          value={upload.toFixed(2)}
          unit="Mbps"
        />

        <ResultCard
          title="PING"
          value={ping}
          unit="ms"
        />

        <ResultCard
          title="JITTER"
          value={jitter}
          unit="ms"
        />

      </div>

      <LiveChart />

    </div>
  );
}

export default SpeedTest;