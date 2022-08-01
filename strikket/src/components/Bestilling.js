import Ordre from './Ordre'

const Bestilling = ({leggTilIHandlekurv}) => {
  
  return (
    <div className='bestilling'>
    
    <Ordre leggTilIHandlekurv={leggTilIHandlekurv} />
    </div>
  )
}

export default Bestilling