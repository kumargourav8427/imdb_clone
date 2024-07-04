import React from 'react'

function Banner() {
  return (
    <div className='w-full h-[35vh] md:h-[85vh] bg-cover flex items-end' style={{backgroundImage:`url(https://i.pinimg.com/originals/29/7d/e0/297de0761b0c756266d74ca50d03cc1d.jpg)`}}>
        <div className='text-white text-sm md:text-xl text-center w-full bg-blue-900/60 py-2'>Avengers Endgame</div>
    </div>
  )
}

export default Banner