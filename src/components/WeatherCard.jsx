import React from 'react'

const WeatherCard = ({ weather }) => {
    //console.log( weather );

return (
    <div>
         <h2>{ weather.name }</h2>
        <h1>{ weather.sys?.country }</h1>
        <p>Latitud:{ weather.coord?.lat }</p>
        <p>Longitud:{ weather.coord?.lon }</p>
        <p>Temperatura:{ weather.main?.temp }</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
    </div>
)
}

export default WeatherCard