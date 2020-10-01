import React, { useState } from 'react'
import { VictoryChart, VictoryLine, VictoryBar } from 'victory'

function Weather() {

    const today = new Date();
    const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

    const initWeather = [];
    const [weather, setWeather] = useState(initWeather);

    fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=50')
        .then(response => response.json())
        .then(json => setWeather([...json]));

    let humptemkey = 1;
    let charttemp = [];
    let charthum = [];
    weather.slice(0, 24).reverse().map(temphum => {
        const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] + '.' + temphum.PublishedAt.split('T')[0].split('-')[1] + '.' + temphum.PublishedAt.split('T')[0].split('-')[0];
        const measurementTime = temphum.PublishedAt.split('T')[1].split(':')[0] + ':' + temphum.PublishedAt.split('T')[1].split(':')[1];
        charttemp.push({ x: String(measurementTime), y: parseInt(temphum.Temp) });
        charthum.push({ Päivämäärä: String(measurementTime), Ilmankosteus: parseInt(temphum.Hum), label: String(temphum.Hum.split('.')[0]) + "%" });
        return <div key={humptemkey++}><b>Pvm:</b>{measurementDate}<b>klo:</b> {measurementTime}<b>Ilmankosteus:</b>{temphum.Hum.split('.')[0]}% <b>Lämpötila:</b> {temphum.Temp}.split('.')[0]}°C</div>
    })

    const temperatureData = charttemp;
    const humidityData = charthum;

    return (
        <div>
            
            <VictoryChart
                domainPadding={{ x: 20, y: 10 }}
                width={1300}
                height={350}>
                <VictoryLine
                    data={temperatureData}
                    style={{
                        data:
                            { stroke: "green", strokeWidth: 1 }
                    }}
                    />

            </VictoryChart>
            <VictoryChart
                width={1300}
                height={350}
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
