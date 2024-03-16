import freeCodeCampLogo from './imagen/logo.jpg'
import './App.css';

function App() {
  return (
    <div className="App">
      <div  className='freecodecamp-logo-contenedor'>
        <img
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt='Logo de helheimr'
        />
      </div>
    </div>
  );
}

export default App;
