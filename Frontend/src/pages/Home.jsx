import React from 'react'

const Home = () => {
  return (
    <div className='h-screen relative'>
      <img className='absolute w-16 left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='bg-white absolute top-0 w-full p-5'>
        <h4 className='text-3xl font-semibold'>Find a trip</h4>
        <form>
          <input className='bg-[#eee] px-8 py-2 text-lg rounded-lg' type="text" placeholder='Add a pick-up location' />
          <input className='bg-[#eee] px-8 py-2 text-lg rounded-lg' type="text" placeholder='Enter your destination' />
        </form>
      </div>
    </div>
    
  )
}

export default Home