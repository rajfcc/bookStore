
import { trefoil } from 'ldrs'
const Spinner = () => {
  trefoil.register()
  return (
    // <div className='animate-ping h-16 w-16 m-8 rounded-full bg-sky-600'></div>
<div className='flex flex-cols items-center justify-center'>
<l-trefoil
  size="100"
  stroke="6"
  stroke-length="0.15"
  bg-opacity="0.1"
  speed="1.4" 
  color="coral" 
></l-trefoil>
</div>
  )
}

export default Spinner