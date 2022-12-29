import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [showDarkMode, setShowDarkMode] = useState(true);
  const [ theme, setTheme ] = useState ( 'light' );


  const handleClickDarkMode = () => {
    setShowDarkMode(!showDarkMode);
    if ( showDarkMode ) {
      setTheme( 'dark' );
    } else {
      setTheme( 'light' );
    }
  }

  useEffect(() => {
    document.body.className = theme;
    console.log( theme );
  }, [ theme ]);


  return (
    <div className={ `App ${theme }`}>
      <div>
        <div className={ `App__title ${theme}`}>
          <h1 className={ `h1-autoresize--${theme}`}>Weather App</h1>
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
      </div>
    </div>
  )
}

export default App