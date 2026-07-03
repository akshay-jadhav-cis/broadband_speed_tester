import useSpeedTest from "../../hooks/useSpeedTest";

function Button() {

    const { setDownload } = useSpeedTest();

    const startTest = async () => {

        // Create AbortController
        const controller = new AbortController();

        // Stop the request after 10 seconds
        setTimeout(() => {
            controller.abort();
        }, 10000);

        try {

            const response = await fetch("http://localhost:8000/download", {
                signal: controller.signal
            });

            const reader = response.body.getReader();

            let bytes = 0;
            const start = performance.now();

            while (true) {

                const { done, value } = await reader.read();

                if (done) break;

                bytes += value.length;

                const seconds = (performance.now() - start) / 1000;

                const mbps = (bytes * 8) / (seconds * 1000000);

                setDownload(mbps);
            }

        } catch (error) {

            if (error.name === "AbortError") {
                console.log("Speed test completed.");
            } else {
                console.error(error);
            }

        }

    };

    return (
        <button
            className="start-btn"
            onClick={startTest}
        >
            Start Test
        </button>
    );
}

export default Button;