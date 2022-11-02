import axios from 'axios';
import React, { useEffect, useState } from 'react';


const Weather = ({selectedCountry}) => {
    const [weather, setWeather] = useState({})
 
    useEffect(() => {
        console.log('Hello')
        const loc = selectedCountry.capital
        const apiKey = "64def7dd477670c45b91caf2bb5ba483"/* process.env.REACT_APP_API_KEY.trim() */
        console.log(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`, 'YOOO')
        axios
            .get(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`)
            .then(response => {
            console.log('promise fulfilled')
            setWeather({
                descp: response.data.weather[0].description,
                temp: ((response.data.main.temp - 273.15) * 9/5 + 32),
                wind: response.data.wind.speed,
                humidity: response.data.main.humidity,
                press: response.data.main.pressure,
                img: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
            })
            })

    },[selectedCountry])

    return (
        <div>
            <h3>Weather in {selectedCountry.capital}</h3>
            <img src={weather.img} alt = "weather cloud"></img>
            <p>Temperature {weather.temp}</p>
            <p>Wind Speed {weather.wind}</p>
            <p>Humidy {weather.humidity}</p>
            <p>Pressure {weather.press}</p>
        </div>
    )

}


export default Weather