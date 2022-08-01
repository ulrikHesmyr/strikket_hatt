import React from 'react'

const Handlekurv = ({items, sendOrdre}) => {
    
  return (
    <>
    {items.map((item, index)=><div key={index}>{item.pattern}</div>)}
    <button onClick={(e)=>{
        e.preventDefault()
        sendOrdre("hei")
    }} className="btn" style={{backgroundColor:'green', color:'white'}}>Send bestilling!</button> 
    </>
  )
}

export default Handlekurv