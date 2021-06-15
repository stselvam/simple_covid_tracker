import React, { useState, useEffect } from 'react'
import { Line, Bar } from 'react-chartjs-2';
import { fetchDailyData } from "../../Api";

import "./Chart.css";

const Chart = ({data: {confirmed, recovered, deaths}, country}) => {

    const [dailyData, setDailyData] = useState({})

    useEffect(() => {
        const fetchDailyDataApi = async () => {
            setDailyData(await fetchDailyData());
        };
        fetchDailyDataApi();
    }, []);

    const lineVisualizer = (
        dailyData.length
        ?
            (<Line data={{
                labels: dailyData.map(({ date }) => date),
                datasets: [
                    {
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333FF",
                        fill: true
                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "#FF0000",
                        backgroundColor: "rgba(255, 0, 0, 0.5)",
                        fill: true
                    }
                ],
            }}/>)
        : <div>Invalid Data!</div>
    );

    const barVisualizer = (
        confirmed? (
            <Bar data = {{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            "rgba(0, 0, 255, 0.5)",
                            "rgba(0, 255, 0, 0.5)",
                            "rgba(255, 0, 0, 0.5)"
                        ],
                        data: [
                            confirmed.value,
                            recovered.value,
                            deaths.value
                        ]
                    }]
                }}
                options = {{
                    legend: { display: false },
                    title: { title: true, text: `Present stats in ${country}` }
            }}/>)
        : <div>Invalid Data!</div>
    )

    return (
        <div className="chart___container">
            { country? barVisualizer: lineVisualizer }
        </div>
    )
}

export default Chart