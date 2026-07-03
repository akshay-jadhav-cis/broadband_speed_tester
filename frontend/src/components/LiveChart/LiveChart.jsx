import {
    ResponsiveContainer,
    LineChart,
    Line,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip
} from "recharts";

import useSpeedTest from "../../hooks/useSpeedTest";

import "./LiveChart.css";

function LiveChart() {

    const { graphData } = useSpeedTest();

    return (

        <section className="live-chart">

            <div className="chart-header">

                <h2>Live Speed Graph</h2>

                <span>Real-Time Internet Performance</span>

            </div>

            <div className="chart-wrapper">

                <ResponsiveContainer
                    width="100%"
                    height="100%"
                >

                    <LineChart
                        data={graphData}
                        margin={{
                            top: 20,
                            right: 20,
                            left: 10,
                            bottom: 10
                        }}
                    >

                        <CartesianGrid
                            strokeDasharray="4 4"
                            stroke="#2b2b2b"
                        />

                        <XAxis
                            dataKey="time"
                            tick={{ fill: "#b5b5b5" }}
                            axisLine={{ stroke: "#555" }}
                            tickLine={false}
                        />

                        <YAxis
                            tick={{ fill: "#b5b5b5" }}
                            axisLine={{ stroke: "#555" }}
                            tickLine={false}
                        />

                        <Tooltip
                            contentStyle={{
                                background: "#181818",
                                border: "1px solid #333",
                                borderRadius: "12px",
                                color: "#fff"
                            }}
                        />

                        <Line
                            type="monotone"
                            dataKey="speed"
                            stroke="#00D4FF"
                            strokeWidth={3}
                            dot={false}
                            isAnimationActive={false}
                        />

                    </LineChart>

                </ResponsiveContainer>

            </div>

        </section>

    );

}

export default LiveChart;