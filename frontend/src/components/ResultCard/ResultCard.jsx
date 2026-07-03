import useSpeedTest from "../../hooks/useSpeedTest";

function ResultCard({ title, value, unit }) {
  const {

    download,
    upload,
    ping,
    jitter

  } = useSpeedTest();
  return (
    <div className="card">
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
  );
}

export default ResultCard;