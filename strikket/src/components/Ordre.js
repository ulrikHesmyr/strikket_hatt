import { useState } from "react"

const Ordre = ({leggTilIHandlekurv}) => {


    const [headSize, setHeadSize] = useState(false)
    const [colors, setColors] = useState(false)
    const [pattern, setPattern] = useState(false)
    const bestilling ={headSize:"57,3cm", colors:"hvit og beige", pattern:"striper"}

  return (
    <>
    <h1>Bestill din strikkede fiskelue!</h1>
    <table>
    <thead>
        <tr>
          <th>Mønster</th>
          <th>Sendes innen dager</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Sirkler</td>
          <td>5 dager</td>
        </tr>
        <tr>
          <td>Blomster</td>
          <td>6 dager</td>
        </tr>
        <tr>
          <td>Striper</td>
          <td>3 dager</td>
        </tr>
        
      </tbody>
      </table>
    <form>
      
      <label>Lengde rundt hode i cm <input type="text" placeholder='eks.: 55cm' onChange={(e)=>{setHeadSize(e.target.value)}}/></label>
      <label>{`Farge(r)`} <input type="text" placeholder='Rosa og violett' onChange={(e)=>{setColors(e.target.value)}}/></label>
      <label>Mønster<input type="text" placeholder='eks.: 55cm' onChange={(e)=>{setPattern(e.target.value)}}/></label>
      <button onClick={(e)=>{
        e.preventDefault();
        leggTilIHandlekurv(bestilling)
        
      }}>Legg til i handlevogn</button>
    </form>
    </>
  )
}

export default Ordre