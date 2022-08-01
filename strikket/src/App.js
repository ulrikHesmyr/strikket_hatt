import './App.css';
import Nav from './components/Nav'
import {useState} from 'react'

function App() {
  const [handlekurv, setHandlekurv] = useState([])//{headSize:"56,3cm", colors:"grønn", pattern:"Blomster"}

  const oppdaterHandlekurv = (item) => {
    setHandlekurv([...handlekurv, item])
    console.log(item);
  }

  const sendOrdre = (ordre) =>{
    console.log(ordre)
  }

  return (
    <>
    <Nav handlekurv={handlekurv} onAdd={oppdaterHandlekurv} sendOrdre={sendOrdre}/>
    </>
  );
}

export default App;
