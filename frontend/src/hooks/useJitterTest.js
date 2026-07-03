import useSpeedTest from "./useSpeedTest";

export default function useJitterTest() {

    const { setJitter } = useSpeedTest();

    return function calculateJitter(samples) {

        let total = 0;

        for (let i = 1; i < samples.length; i++) {

            total += Math.abs(
                samples[i] -
                samples[i - 1]
            );

        }

        const jitter =
            total /
            (samples.length - 1);

        setJitter(Number(jitter.toFixed(2)));

    };

}