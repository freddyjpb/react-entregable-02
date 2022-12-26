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

  console.log( coords );

  useEffect(() => {
    setTimeout(function () { setShowElement( false ); }, 3000 );
    navigator.geolocation.getCurrentPosition( success );
  }, []);

  useEffect(() => {
    if ( coords ) {


    }
  }, [ coords ]);
  
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
    </div>
  )
}

export default App
