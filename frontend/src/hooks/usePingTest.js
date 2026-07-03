import API_URL from "../config/api";
import useSpeedTest from "./useSpeedTest";

export default function usePingTest() {

    const { setPing } = useSpeedTest();

    return async function startPingTest() {

        const samples = [];

        for (let i = 0; i < 10; i++) {

            const start = performance.now();

            await fetch(`${API_URL}/ping`, {
                cache: "no-store"
            });

            const end = performance.now();

            const latency = end - start;

            samples.push(latency);

            await new Promise(resolve =>
                setTimeout(resolve, 100)
            );

        }

        const average =
            samples.reduce((a, b) => a + b, 0) /
            samples.length;

        setPing(Number(average.toFixed(2)));

        return samples;

    };

}