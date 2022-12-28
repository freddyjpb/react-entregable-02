import React from 'react'

const WeatherCard = ({ weather }) => {
    //console.log( weather );
    const weatherIconName = weather.weather?.[0].icon;

return (
    <div id='GeneralCard'>
         <h2>{ weather.name }</h2>
        <h1>{ weather.sys?.country }</h1>
        <h2>GMT{ weather.timezone / 3600 }</h2>
        <p>Latitud:{ weather.coord?.lat }</p>
        <p>Longitud:{ weather.coord?.lon }</p>
        <p>Temperatura:{ weather.main?.temp }</p>
        <img src={weatherIconName &&  `http://openweathermap.org/img/wn/${weatherIconName}@4x.png`} alt="" />
        <footer><button>Degrees C/F</button></footer>
    </div>
)
}

export default WeatherCard;