import GaugeComponent from "react-gauge-component";
import useSpeedTest from "../../hooks/useSpeedTest";
function SpeedGauge({ speed = 0 }) {
    const { download } = useSpeedTest();
  return (
    <GaugeComponent

       value={download}

            maxValue={1000}

            style={{width:"100%"}}

      arc={{

        width: 0.18,

        colorArray: [

          "#00ff2f",

          "#b8ff00",

          "#ffd600",

          "#ff8800",

          "#ff0000"

        ]

      }}

      labels={{

        valueLabel: {

          formatTextValue: (value) => `${value} Mbps`

        }

      }}

    />
  );
}

export default SpeedGauge;