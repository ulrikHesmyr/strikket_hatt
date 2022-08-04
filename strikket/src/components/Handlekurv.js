import React from 'react'

const Handlekurv = ({items, gaaTilKassen}) => {
    const totalpris = () =>{
      let pris = items.length * 449
      let rabatt = 0
      if(items.length > 1){
        rabatt = 99 * items.length
        pris -= rabatt
      } 
      return (`
      Ordinær ${items.length * 449}kr
      Rabatt -${rabatt}kr

      Sum ${pris}kr`)
    }
  return (
    <>
    <h2>Dine produkter:</h2>
    <div className="handlekurv">
    
    {items.map((item, index)=><div key={index}>
      <p style={{fontSize:'larger', fontWeight:'bold'}}>{item.produkt}</p>
      <p>Mønster: {item.pattern}</p>
      <p>Farge(r): {item.colors.join(', ')}</p>
      <p>Størrelse (i cm): {item.headSize}</p>
      <p>Estimert tid i produksjon: {item.behandlingstid} dager</p>
      </div>)}
    
    </div><pre>{totalpris()}</pre>
    <button onClick={(e)=>{
        e.preventDefault()
        gaaTilKassen()
    }} className="btn" style={{backgroundColor:'green', color:'white'}}>Gå til kassen!</button> 
    </>
  )
}

export default Handlekurv