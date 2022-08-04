import React from 'react'

const Kassen = ({tilbakeIButikken}) => {
  return (
    <button className='btn' style={{backgroundColor:"yellow", color:'black'}} onClick={(e)=>{
        e.preventDefault()
        tilbakeIButikken()
    }}>Kassen</button>
  )
}

export default Kassen