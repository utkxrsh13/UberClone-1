import React from 'react'

const Home = () => {

  const submitHnadler = ()=>{
    
  }

  return (
    <div className='h-screen relative'>
      <img className='absolute w-16 left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />

      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-5 bg-white'>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHnadler(e);
        }}>
          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pick-up location' />
          <input className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Enter your destination' />
        </form>
        </div>
        <div className='h-[70%] bg-red-500 p-5 hidden'>

        </div>
      </div>
    </div>
    
  )
}

export default Home