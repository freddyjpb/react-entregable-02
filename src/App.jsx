import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import loaderLogo from './assets/cdlogo.png'

import './App.css'

function App() {
  const [showElement, setShowElement] = useState( true );
  const [ coords, setCoords ] = useState();

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
  
  return (
    <div className="App">
      
      
      <div className="loader1"> 
        {showElement ? ( 
          <div className="loader2" style={{ opacity: showElement ? 1 : 0 }} >
            I'm here and i will be gone
            <img src={loaderLogo} className="logo react" alt="React logo" />
          </div>) 
        : 
          (<div>esto no va aqui</div>)}{" "}
      </div>

      <div>Weather App</div>
      
    </div>
  )
}

export default App
