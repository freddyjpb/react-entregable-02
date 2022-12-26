import axios from 'axios';
import { useEffect, useState } from 'react'
import loaderLogo from './assets/cdlogo.png'

import './App.css'

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
    setTimeout(function () { setShowElement( false ); }, 3000 );
    navigator.geolocation.getCurrentPosition( success );
  }, []);

  useEffect(() => {
    if ( coords ) {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=914c1ad469eef39db3b797bc89801e76&units=metric`)
      .then((res) => setWeather(res.data));
    }
  }, [ coords ]);

  //console.log( weather );
  
  return (
    <div className="App">
      
      <div className="loader1"> 
        {showElement ? ( 
          <div className="loader2" style={{ opacity: showElement ? 1 : 0 }} >
            <img src={loaderLogo} className="logo react" alt="React logo" />
          </div>) 
        : 
          (<div></div>)}{" "}
      </div>

      <div>
        <h1>App Weather</h1>
        <h2>latitud:{ coords?.lat }</h2>
        <h2>longitud:{ coords?.lon }</h2>
      </div>

      <div className="card">
        <h1>{ weather.name }</h1>
        <h1>{ weather.sys?.country }</h1>
        <h1>{ weather.sys?.country }</h1>
        <p>Latitud:{ weather.coord?.lat }</p>
        <p>Longitud:{ weather.coord?.lon }</p>
        <p>Temperatura:{ weather.main?.temp }</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="" />
      </div> 
    </div>
  )
}

export default App
