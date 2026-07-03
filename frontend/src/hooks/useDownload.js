import API_URL from "../config/api";
import useSpeedTest from "./useSpeedTest";

export default function useDownloadTest() {

    const {
        setDownload,
        setGraphData
    } = useSpeedTest();

    return async function startDownloadTest() {

        // Clear previous graph
        setGraphData([]);

        const controller = new AbortController();

        const timer = setTimeout(() => {
            controller.abort();
        }, 10000);

        try {

            const response = await fetch(
                `${API_URL}/download`,
                {
                    signal: controller.signal,
                    cache: "no-store"
                }
            );

            if (!response.ok) {
                throw new Error("Download Failed");
            }

            if (!response.body) {
                throw new Error("ReadableStream not supported");
            }

            const reader = response.body.getReader();

            let bytes = 0;

            const start = performance.now();

            let lastUpdate = start;

            while (true) {

                const { done, value } = await reader.read();

                if (done) break;

                bytes += value.length;

                const now = performance.now();

                if (now - lastUpdate >= 200) {

                    const seconds =
                        (now - start) / 1000;

                    const mbps =
                        (bytes * 8) /
                        (seconds * 1000000);

                    setDownload(mbps);

                    // Update Live Graph
                    setGraphData(prev => {

                        const updated = [
                            ...prev,
                            {
                                time: Number(seconds.toFixed(1)),
                                speed: Number(mbps.toFixed(2)),
                                type: "download"
                            }
                        ];

                        // Keep only last 60 points
                        return updated.slice(-60);

                    });

                    lastUpdate = now;

                }

            }

            const totalSeconds =
                (performance.now() - start) / 1000;

            const finalSpeed =
                (bytes * 8) /
                (totalSeconds * 1000000);

            setDownload(finalSpeed);

        } catch (err) {

            if (err.name !== "AbortError") {
                console.error(err);
            }

        } finally {

            clearTimeout(timer);

        }

    };

}