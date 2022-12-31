import React, { useState } from 'react';
import { useEffect } from 'react';
import countries from '../countries.json'
import './WeatherCard.css';

const WeatherCard = ({ theme, weather, temperature }) => {
    const [isCelsius, setIsCelsius] = useState( true )
    
    const weatherIconName = weather.weather?.[0].icon;

    const handleClickTemperature = () => {
        setIsCelsius ( !isCelsius );
    }

    const country = countries.filter( res => res.code_2 === weather.sys?.country );
    
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
                    <h2 className={`h2-autoresize--${theme}`}>{country[0]?.name_es}</h2>
                </div>
            </div>

            <div>
                <div className='tempo'>
                    <img src={weatherIconName && `http://openweathermap.org/img/wn/${weatherIconName}@4x.png`} alt="" />
                    <div>
                        <ul>
                            <li><span>Wind Speed:</span>{ weather.wind?.speed } m/s</li>
                            <li><span>Clouds:</span>{ weather.clouds?.all } %</li>
                            <li><span>Pressure:</span>{ weather.main?.pressure } hPa</li>
                        </ul>
                    </div>
                </div>
                <h5 className={`h5-autoresize--${theme}`}>{ isCelsius ? `${ temperature?.celsius } °C` : `${ temperature?.farenheit } °F` }</h5>
            </div>
            <footer><button onClick={ handleClickTemperature }><h4 className={`h4-autoresize--${theme}`}>Change Degrees</h4></button></footer>

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