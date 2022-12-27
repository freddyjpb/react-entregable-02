import axios from 'axios';
import { useEffect, useState } from 'react'
import loaderLogo from './assets/cdlogo.png'

import './App.css'
import WeatherCard from './components/WeatherCard';

function App() {
  const [ showElement, setShowElement ] = useState( true );
  const [ coords, setCoords ] = useState();
  const [ weather, setWeather ] = useState({});

  const success = pos => { 
    setCoords ({
      lat: pos.coords.latitude,
      lon: pos.coords.longitude
    });
  };

  //console.log( coords );

  useEffect(() => {
    setTimeout(function () { setShowElement( false ); }, 10000 );
    navigator.geolocation.getCurrentPosition( success );
  }, []);

  useEffect(() => {
    if ( coords ) {
      const weatherApiKey = '914c1ad469eef39db3b797bc89801e76';
      const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=${weatherApiKey}&units=metric`;
      axios
      .get(weatherApiUrl)
      .then((res) => setWeather(res.data))
      .catch((err) => console.log(err));
    }
  }, [ coords ]);

  //console.log( weather );
  
  return (
    <div className="App">
      <div className="App__loader--container"> 
        {showElement ? ( 
          <div className="App__loader--image" style={{ opacity: showElement ? 1 : 0 }} >
            <img src={loaderLogo}/>
          </div>) 
        : 
          (<div></div>)}{" "}
      </div>

      <div>
        <div className='App__title'>
          <h1 className='h1-autoresize'>Weather App</h1>
        </div>
        <h4>{ coords?.lat } | { coords?.lon }</h4>
        <WeatherCard weather={ weather }/>
      </div>
    </div>
  )
}

export default App