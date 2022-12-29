import axios from 'axios';
import { useEffect, useState } from 'react';
import loaderLogo from './assets/cdlogo.png';
import WeatherCard from './components/WeatherCard';

import './App.css';

function App() {
  const [ showElement, setShowElement ] = useState( true );
  const [showDarkMode, setShowDarkMode] = useState(true);
  const [ theme, setTheme ] = useState ( 'light' );
  const [ coords, setCoords ] = useState();
  const [ weather, setWeather ] = useState({});

  const handleClickDarkMode = () => {
    setShowDarkMode(!showDarkMode);
    if ( showDarkMode ) {
      setTheme( 'dark' );
    } else {
      setTheme( 'light' );
    }
  }

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
    document.body.className = theme;
    //console.log( theme );
  }, [ theme ]);

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
    <div className={ `App ${theme }`}>

       <div className="App__loader--container"> 
        {showElement ? ( 
          <div className="App__loader--image" style={{ opacity: showElement ? 1 : 0 }} >
            <img src={loaderLogo}/>
          </div>) 
        : 
          (<div></div>)}{" "}
      </div>

      <div>
        <div className={ `App__title ${theme}`}>
          <div  className='App_title--container'>
            <img src={loaderLogo}/>
            <h1 className={ `h1-autoresize--${theme}`}>Weather App</h1>
          </div>
          <div>
            <button onClick={handleClickDarkMode}>
              {showDarkMode ? (
                <i className='bx bx-moon'></i>
              ) : (
                <i className='bx bx-sun'></i>
              )}
            </button>
            <button><i className='bx bx-menu'></i></button>
          </div>
        </div>
        <WeatherCard weather={ weather } theme={ theme }/>
      </div>
    </div>
  )
}

export default App;