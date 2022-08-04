import './App.css';
import Butikk from './components/Butikk'
import {useState, useEffect} from 'react'
import Kassen from './components/Kassen';


function App() {

  const adressenavn = "Olaf"
useEffect(() => {
  // declare the data fetching function
  const fetchData = async () => {
    const res = await fetch(`https://ws.geonorge.no/adresser/v1/sok?fuzzy=true&adressenavn=${adressenavn}&objtype=Vegadresse&utkoordsys=4258&treffPerSide=10&side=0`, {
      mode:'cors',
    })
    const data = await res.json()

    console.log(data)
  }

  // call the function
  fetchData()
  
    // make sure to catch any error
    .catch(console.error);
}, [])

  const [handlekurv, setHandlekurv] = useState([])//{headSize:"56,3cm", colors:"grønn", pattern:"Blomster"}
  const [kasseStatus, setKassestatus] = useState(false)
  const oppdaterHandlekurv = (item) => {
    setHandlekurv([...handlekurv, item])
    console.log(item);

  }

  const gaaTilKassen = () =>{
    setKassestatus(!kasseStatus)
  }
  //const sendOrdre = (ordre) =>{
  //  console.log(ordre)
  //}

  return (
    <>
    
    {kasseStatus ? <Kassen tilbakeIButikken={gaaTilKassen}/>:<Butikk handlekurv={handlekurv} onAdd={oppdaterHandlekurv} gaaTilKassen={gaaTilKassen}/>}
    
    </>
  );
}

export default App;
