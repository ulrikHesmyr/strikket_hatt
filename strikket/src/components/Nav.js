import {useState} from 'react'
import Bestilling from './Bestilling'
import Startside from './Startside'
import { FaArchive } from 'react-icons/fa'

const Nav = () => {
    const [navButtons, setNavButtons] = useState([true, false, false])
    
  return (
    <div>
        <div className="header">
        <div className='btn' onClick={()=>{setNavButtons([true,false,false])}}>Hjem</div>
        <div className='btn' onClick={()=>{setNavButtons([false,true,false])}}>Bestilling</div>
        <div className='btn' onClick={()=>{setNavButtons([false,false,true])}}><FaArchive/></div>
        </div>
        <div className="main">
            {navButtons[0] ? <Startside/>:''}
            {navButtons[1] ? <Bestilling/>:''}
            {navButtons[2] ? 'hellu':''}
        </div>
    </div>
    
  )
}

export default Nav