import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import loaderLogo from './assets/cdlogo.png'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [showElement, setShowElement] = useState(true);

  useEffect(() => {
    setTimeout(function () { setShowElement( false ); }, 3000 );
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

      
      
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
