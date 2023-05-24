import logo from './logo.svg';
import './App.css';
import React,{ useState } from "react"
const Contador = () => {
  
    const  [contador, setContador]=useState(0);   
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Valor actual del contador: { contador }
            {/* Edit <code>src/App.js</code> and save to reload. */}
            {/* Sdta welcome */}
          </p>
          <button onClick= {() => { setContador (contador-1)}}>Disminuir</button>
          <button onClick= {() => { setContador (0)}}>Reestablecer</button>
          <button onClick= {() => { setContador (contador+1)}}>Aumentar</button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
  
  
}

export default Contador;

