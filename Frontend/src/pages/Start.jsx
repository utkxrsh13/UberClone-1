import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1557404763-69708cd8b9ce?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-10 w-full bg-black flex justify-between flex-col'>
        <img className='w-16 pl-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="Uber logo" />
        <div className='bg-white pb-4 py-4 px-4'>
          <h2 className='text-3xl font-bold'>Get started with Uber</h2>
          <Link to='/login' className='bg-black flex items-center justify-center text-white w-full py-3 mt-5 rounded'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start