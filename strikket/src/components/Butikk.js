import {useState} from 'react'
import Bestilling from './Bestilling'
import Startside from './Startside'
import { FaShoppingBag,FaHome, FaAddressBook } from 'react-icons/fa'
import Handlekurv from './Handlekurv'

const Nav = ({handlekurv, onAdd, gaaTilKassen}) => {
    const [navButtons, setNavButtons] = useState([true, false, false])
    const gaaTilHandlekurv = () =>{
      setNavButtons([false,false,true]);
    }
  return (
    <div>
        <div className="header">
        <div className='btn' onClick={()=>{setNavButtons([true,false,false])}}><FaHome/>Hjem</div>
        <div className='btn' onClick={()=>{setNavButtons([false,true,false])}}><FaAddressBook/> Bestilling</div>
        <div className='btn' onClick={()=>{setNavButtons([false,false,true])}}><FaShoppingBag/>{handlekurv.length}</div>
        </div>
        <div className="main">
            {navButtons[0] ? <Startside/>:''}
            {navButtons[1] ? <Bestilling leggTilIHandlekurv={onAdd} gaaTilHandlekurv={gaaTilHandlekurv}/>:''}
            {navButtons[2] ? <Handlekurv items={handlekurv} gaaTilKassen={gaaTilKassen}/>:''}
        </div>
    </div>
    
  )
}

export default Nav