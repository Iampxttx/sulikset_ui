import React from 'react'
import { VictoryChart, VictoryLine, VictoryBar } from 'victory'

function Weather() {

    const today = new Date();
    const date = today.getDate() + "." + parseInt(today.getMonth() + 1) + "." + today.getFullYear();

    const initWeather = [];
    const [weather, setWeather] = use(initWeather);

    fetch('https://funcvariaiot.azurewebsites.net/api/HttpTriggerGetIotData?code=qO5qkShg0osHqY0BB2nfXI/anPgQ/K/3mIF7VTCFfaTdrvo6wl6DKw==&amount=50')
        .then(response => response.json())
        .then(json => setWeather([...json]));
    
let humtepkey = 1;
let charTempData = [];
let charhumData = [];
const rows = () => weather.slice(0, 24).reverse().map(temphum => {
    const measurementDate = temphum.PublishedAt.split('T')[0].split('-')[2] + '.' + temphum.PublishedAt.split('T')[0].split('-'[1] + '.' + temphum.PublishedAt.split('T'[0].split('-')[0];
    const measurementDate = temphum.PublishedAt.split('T')[1].split(':')[0] + ':' + temphum.PublishedAt.split('T')[1].split(':')[1];
    chartTempData.push({ x: String(measurementTime), y: parseInt(temphum.Temp) });
    chartHumData.push({ experiment: String(measurementTime), actual: parseInt(temphum.Hum), label: String(temphum.Hum.split('.')[0])+"%" });
    return <div key={humptemkey++}><b>Pvm: </b>{measurementDate}, <b>klo:</b> {measurementTime} <b>Ilmankosteus:</b> {temphum.Hum.split('.')[0]}% <b>Lämpötila:</b> {temphum.Temp}.split('.')[0]}°C</div>
})

const showTempature = charTempData;
const ShowHumidity = chartHumData;


   
   
    const temperatureData = [
        { experiment: "1.1.", actual: -10 },
        { experiment: "2.1.", actual: 15 },
        { experiment: "3.1.", actual: 0 },
        { experiment: "4.1.", actual: 1 },
        { experiment: "5.1.", actual: 2 },
        { experiment: "6.1.", actual: 3 }
    ]

    const humidityData = [
        { Päivämäärä: "1.1.", Ilmankosteus: 61 },
        { Päivämäärä: "2.1.", Ilmankosteus: 64 },
        { Päivämäärä: "3.1", Ilmankosteus: 67 },
        { Päivämäärä: "4.1.", Ilmankosteus: 70 },
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
