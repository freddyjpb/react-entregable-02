import React from 'react';
import { useEffect } from 'react';
import './WeatherCard.css';

const WeatherCard = ({ weather, theme }) => {
    //console.log( weather );
    //console.log( theme );
    const weatherIconName = weather.weather?.[0].icon;

    useEffect(() => {
        document.body.className = theme;
        //console.log( theme );
    }, [theme]);

    return (
        <div className={`Weather__card ${theme}`}>
            <h2 className={ `h2-autoresize--${theme}`}>{weather.name}</h2>
            <h2 className={ `h2-autoresize--${theme}`}>{weather.sys?.country}</h2>
            <h1 className={ `h1-autoresize--${theme}`}>GMT{weather.timezone / 3600}</h1>
            <p>Latitud:{weather.coord?.lat}</p>
            <p>Longitud:{weather.coord?.lon}</p>
            <p>Temperatura:{weather.main?.temp}</p>
            <img src={weatherIconName && `http://openweathermap.org/img/wn/${weatherIconName}@4x.png`} alt="" />
            <footer><button>Degrees C/F</button></footer>
        </div>
    )
}

export default WeatherCard;