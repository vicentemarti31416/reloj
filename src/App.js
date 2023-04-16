import logo from './logo.svg';
import './App.scss';
import DigitalClock from './components/DigitalClock';
import CuentaAtras from './components/CuentaAtras';
import Cronometro from './components/Cronometro';

function App() {

  return (
    <div className='watch__container'>
      <DigitalClock />
      <CuentaAtras />
      <Cronometro />
    </div>
  );
}

export default App;
