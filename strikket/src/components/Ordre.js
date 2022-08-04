import { useState } from "react"
import Fargevelger from "./Fargevelger"
const Ordre = ({leggTilIHandlekurv, gaaTilHandlekurv}) => {


    const [headSize, setHeadSize] = useState(false)
    const [colors, setColors] = useState(['white'])
    const [pattern, setPattern] = useState(false)
    const [antallFarger, setAntallfarger] = useState(1)
    const updateColors = (e, color, index)=>{
      e.preventDefault()
      const updatedColors = [...colors]
      updatedColors[index] = color
      setColors(updatedColors);
    }
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
        <tr>
          <td>Ensfarget</td>
          <td>2 dager</td>
        </tr>
        <tr>
          <td>Vafler</td>
          <td>5 dager</td>
        </tr>
        
      </tbody>
      </table>
    <form className="form-control">
      
      <label>Lengde rundt hode i cm <input type="text" placeholder='eks.: 55cm' onChange={(e)=>{setHeadSize(e.target.value)}}/></label>
      <Fargevelger updateColors={updateColors} index={0}/>
      {antallFarger>1&&<Fargevelger updateColors={updateColors} index={1}/>}
      {antallFarger>2&&<Fargevelger updateColors={updateColors} index={2}/>}
      <button onClick={(e)=>{e.preventDefault(); if(antallFarger < 3){updateColors(e,"white", antallFarger); setAntallfarger(antallFarger + 1); }else return }} className="btn" style={{backgroundColor:'green'}}>Legg til farge +</button>
      <label>Mønster<select style={{backgroundColor:'white', fontFamily:`Uchen, serif`}} value={pattern} onChange={(e)=>{setPattern(e.target.value); } }>
        <option value="Striper">Striper</option>
        <option value="blomster">Blomster</option>
        <option value="sirkler">Sirkler</option>
        <option value="vaffel">Vaffel</option>
        <option value="ensfarget">Ensfarget</option>
      </select>
      Pris: 449kr</label>
      <button className="btn" style={{color:'white', backgroundColor:'green'}} onClick={(e)=>{
        e.preventDefault();
        leggTilIHandlekurv({headSize, colors, pattern, produkt:"Strikket fiskelue"});
        gaaTilHandlekurv();
      }}>Legg til i handlevogn</button>
    </form>
    </>
  )
}

export default Ordre