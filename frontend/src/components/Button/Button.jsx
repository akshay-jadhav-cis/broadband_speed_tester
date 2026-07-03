import { useState } from "react";
import useSpeedTest from "../../hooks/useSpeedTest";
import useDownloadTest from "../../hooks/useDownload";
import useUploadTest from "../../hooks/useUpload";
import usePingTest from "../../hooks/usePingTest";
import useJitterTest from "../../hooks/useJitterTest";

function Button() {
    const { setDownload, setUpload } = useSpeedTest();

    const startDownloadTest = useDownloadTest();
    const startUploadTest = useUploadTest();
    const startPingTest = usePingTest();
    const calculateJitter = useJitterTest();

    const [isTesting, setIsTesting] = useState(false);

    const startTest = async () => {
        if (isTesting) return;

        setIsTesting(true);

        try {
            // Reset values
            setDownload(0);
            setUpload(0);

            console.log("Starting Download Test...");
            await startDownloadTest();
            console.log("Download Completed");

            console.log("Starting Upload Test...");
            await startUploadTest();
            console.log("Upload Completed");

            console.log("Calculating Ping...");
            const samples = await startPingTest();

            console.log("Calculating Jitter...");
            calculateJitter(samples);

            console.log("Speed Test Finished");
        } catch (err) {
            console.error(err);
        } finally {
            setIsTesting(false);
        }
    };

    return (
        <button
            className="start-btn"
            onClick={startTest}
            disabled={isTesting}
        >
            {isTesting ? "Testing..." : "🚀 Start Test"}
        </button>
    );
}

export default Button;