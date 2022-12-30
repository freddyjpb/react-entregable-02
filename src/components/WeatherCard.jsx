import React from 'react';
import { useEffect } from 'react';
import countries from '../countries.json'
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
            <div className='Weather__card--location'>
                <img src='/wwloc.png' alt="" />
                <div>
                    <h2 className={`h2-autoresize--${theme}`}>{weather.name}</h2>
                    <h2 className={`h2-autoresize--${theme}`}>Costa Rica</h2>
                </div>
            </div>

            <div>
                <img src={weatherIconName && `http://openweathermap.org/img/wn/${weatherIconName}@4x.png`} alt="" />
                <h5 className={`h5-autoresize--${theme}`}>{weather.main?.temp}</h5>

            </div>
            <footer><button>Degrees C/F</button></footer>

            <div className='Weather__Card--footer'>
                <h3 className={ `h3-autoresize--${theme}`}>GMT{weather.timezone / 3600}</h3>
                <div>
                    <h4 className={`h4-autoresize--${theme}`}>Latitud:{weather.coord?.lat}</h4>
                    <h4 className={`h4-autoresize--${theme}`}>Longitud:{weather.coord?.lon}</h4>
                </div>
                <h3 className={ `h3-autoresize--${theme}`}>{weather.sys?.country}</h3>
            </div>
        </div>
    )
}

export default WeatherCard;