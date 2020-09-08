import React from 'react'
import { VictoryChart, VictoryLine, VictoryBar } from 'victory'

function Weather() {
    const temperatureData = [
        { experiment: "1.1.", actual: -10 },
        { experiment: "2.1.", actual: 15 },
        { experiment: "3.1.", actual: 0 },
        { experiment: "4.1.", actual: 1 },
        { experiment: "5.1.", actual: 2 },
        { experiment: "6.1.", actual: 3 }
    ]

    const humidityData = [
        { Päivämäärä: "1.1.", Ilmankosteus: 8000 },
        { Päivämäärä: "2.1.", Ilmankosteus: 13000 },
        { Päivämäärä: "3.1", Ilmankosteus: 17900 },
        { Päivämäärä: "4.1.", Ilmankosteus: 23000 },
    ]
    return (
        <div>
            <VictoryChart
                domainPadding={{ x: 20, y: 10 }}
                width={1000}
                height={250}>
                <VictoryLine
                    data={temperatureData}
                    style={{
                        data:
                            { stroke: "green", strokeWidth: 1 }
                    }}
                    x="expreriment"
                    y="actual" />

            </VictoryChart>
            <VictoryChart
                width={1000}
                height={250}
                domainPadding={{ x: 150, y: 10 }}>
                <VictoryChart>
                    <VictoryBar
                        data={humidityData}
                        x="Päivämäärä"
                        y="Ilmankosteus"
                    />
                </VictoryChart>
            </VictoryChart>
        </div>
    )
}

export default Weather;
