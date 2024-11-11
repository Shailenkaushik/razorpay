import React from 'react'

export default function Hero() {
  return (
    <div className='flex  flex-row justify-around items-center space-x-2 bg-gradient-to-r from-purple-300 to-cyan-300'>
      <div className=' flex flex-col w-[400px]'>
         <h1 className='basis=1/4 text-3xl'>Power your finance Grow your business</h1>
         <div className='w-5 h-1 bg-green-400'></div>
         <p className='basis=1/4'>
            Accept payments from customers
            Automate payout for vendors. Never run out of work capital
         </p>   
         <button className='font-bold border-solid border-2 border-sky-500  rounded-md p-2 hover:bg-cyan-100 transition-all duration-200'>Sign up now</button>
         
      </div>
      <div className=''>
        <img src="./Hero.avif" alt="" />
      </div>

    </div>
  )
}
