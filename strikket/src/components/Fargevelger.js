import { useState } from "react"
const Fargevelger = ({updateColors, index}) => {

    const availableColors = ['white', 'lightblue', 'beige', 'burlywood', 'black', 'brown']
    const [color, setColor] = useState('white')

  return (
    <>
    <label>{`Farge(r)`} <select value={color} style={{backgroundColor:`${color}`, color:'white', textShadow:'1px 1px 2px black', fontFamily:`Uchen, serif`}} onChange={(e)=>{setColor(e.target.value); updateColors(e, e.target.value, index)}}>
      {availableColors.map((color, index)=><option key={index} value={color} style={{backgroundColor:`${color}`, color:'white', textShadow:'1px 1px 2px black', fontFamily:`Uchen, serif`}}>{color}</option>)}
      </select>
      
    </label>
    </>
  )
}

export default Fargevelger