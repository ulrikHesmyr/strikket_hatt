import {FaMoneyBillWave, FaTshirt, FaTruck} from 'react-icons/fa'
const Startside = () => {
  return (
    <>
    <div className="main">
        <div className="row">
            <div className='section'>
            <h1>1.</h1>
            <p>Mål lengden rundt hodet</p>
            <h1>2.</h1>
            <p>Velg farger på bestillingssiden og legg inn omkrets rundt hodet i cm</p>
            <h1>3.</h1>
            <p>Velg mønster</p>
            <h1>4.</h1>
            <p>Bestill på bestillingssiden og betal med vipps. 
                Pakken sendes med posten. Gjerne del på sosiale 
                medier og tagg @anine synlig på story for 45kr tilbakebetalt!</p>
            </div>
        </div>
        <div className='row'>
            <div className='section'>
            <FaMoneyBillWave style={{fontSize:"2rem"}}/><p>Pris: 449kr</p>
            <FaTshirt style={{fontSize:"2rem"}}/><p>Materiale: 100% Bomull</p>
            <FaTruck style={{fontSize:"2rem"}}/><p>Forventet leveringstid 1 uke</p>
            </div>
            <div className='section'>
                suiii   
            </div>
        </div>

    </div>
    </>
  )
}

export default Startside