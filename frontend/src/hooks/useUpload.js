import API_URL from "../config/api";
import useSpeedTest from "./useSpeedTest";

export default function useUploadTest() {

    const {
        setUpload,
        setGraphData
    } = useSpeedTest();

    return async function startUploadTest() {

        const controller = new AbortController();

        const timer = setTimeout(() => {
            controller.abort();
        }, 10000);

        // 256 KB upload chunk
        const chunk = new Uint8Array(256 * 1024);

        let uploadedBytes = 0;

        const start = performance.now();

        let lastUpdate = start;

        try {

            while (!controller.signal.aborted) {

                try {

                    const response = await fetch(
                        `${API_URL}/upload`,
                        {
                            method: "POST",
                            body: chunk,
                            signal: controller.signal,
                            cache: "no-store"
                        }
                    );

                    if (!response.ok) {
                        throw new Error("Upload Failed");
                    }

                    uploadedBytes += chunk.length;

                    const now = performance.now();

                    if (now - lastUpdate >= 200) {

                        const seconds =
                            (now - start) / 1000;

                        const mbps =
                            (uploadedBytes * 8) /
                            (seconds * 1000000);

                        setUpload(mbps);

                        // Add upload point to graph
                        setGraphData(prev => {

                            const updated = [
                                ...prev,
                                {
                                    time: Number(seconds.toFixed(1)) + 10,
                                    speed: Number(mbps.toFixed(2)),
                                    type: "upload"
                                }
                            ];

                            return updated.slice(-60);

                        });

                        lastUpdate = now;

                    }

                } catch (err) {

                    if (err.name === "AbortError") {
                        break;
                    }

                    console.error(err);
                    break;

                }

            }

            const totalSeconds =
                (performance.now() - start) / 1000;

            const finalSpeed =
                (uploadedBytes * 8) /
                (totalSeconds * 1000000);

            setUpload(finalSpeed);

        } finally {

            controller.abort();
            clearTimeout(timer);

        }

    };

}