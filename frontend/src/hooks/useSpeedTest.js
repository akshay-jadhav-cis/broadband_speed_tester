import { useContext } from "react";
import { SpeedContext } from "../context/SpeedContext";

export default function useSpeedTest() {

    return useContext(SpeedContext);

}