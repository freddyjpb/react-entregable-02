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

    const windspeed = ( weather.wind?.speed * 3.6 ).toFixed( 1 );
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
                <div className='Weather__card--infocontainer'>
                    <img src={weatherIconName && `http://openweathermap.org/img/wn/${weatherIconName}@4x.png`} alt="" />
                    <div className='Weather__card--infodetails'>
                        <div className='Weather__card--infodetails-item1'><div className='Weather__card--infodetails-item1-border'><h3 className={ `h3-autoresize--${theme}`}>{ weather.weather?.[0].description }</h3></div></div>
                        <div className='Weather__card--infodetails-item2'><h4 className={ `h4-autoresize--${theme}`}>Wind Speed:</h4></div>                        
                        <div className='Weather__card--infodetails-item3'><h4 className={ `h4-autoresize--${theme}`}>{ windspeed } Km/h</h4></div>                        
                        <div className='Weather__card--infodetails-item4'><h4 className={ `h4-autoresize--${theme}`}>Clouds:</h4></div>
                        <div className='Weather__card--infodetails-item5'><h4 className={ `h4-autoresize--${theme}`}>{ weather.clouds?.all } %</h4></div>                        
                        <div className='Weather__card--infodetails-item6'><h4 className={ `h4-autoresize--${theme}`}>Pressure:</h4></div>
                        <div className='Weather__card--infodetails-item7'><h4 className={ `h4-autoresize--${theme}`}>{ weather.main?.pressure } hPa</h4></div>
                    </div>
                </div>
                <h6 className={`h6-autoresize--${theme}`}>{ isCelsius ? `${ temperature?.celsius } °C` : `${ temperature?.farenheit } °F` }</h6>
            </div>

            <footer><button onClick={ handleClickTemperature }><h3 className={`h3-autoresize--${theme}`}>Change Degrees</h3></button></footer>

            <div className='Weather__Card--footer'>
                <h3 className={ `h3-autoresize--${theme}`}>GMT{weather.timezone / 3600}</h3>
                <div>
                    <h5 className={`h5-autoresize--${theme}`}>Latitud:{weather.coord?.lat}</h5>
                    <h5 className={`h5-autoresize--${theme}`}>Longitud:{weather.coord?.lon}</h5>
                </div>
                <h3 className={ `h3-autoresize--${theme}`}>{weather.sys?.country}</h3>
            </div>
        </div>
    )
}

export default WeatherCard;