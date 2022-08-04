import Ordre from './Ordre'

const Bestilling = ({leggTilIHandlekurv, gaaTilHandlekurv}) => {
  
  return (
    <div className='bestilling'>
    
    <Ordre leggTilIHandlekurv={leggTilIHandlekurv} gaaTilHandlekurv={gaaTilHandlekurv} />
    </div>
  )
}

export default Bestilling