import React from 'react'

export default function Hero() {
  return (
    <>
         <section className='bg-deepBlue overflow-x-scroll no-scrollbar overflow-hidden'>
             <div className='w-10/12  max-w-[1080px] flex flex-row justify-between items-center mx-auto  ' >
                {/* leftpart */}
                    <div className='text-white flex flex-col gap-6  p-2'>
                        <h1 className='text-[40px] font-bold '>Power to automate Power to work</h1>
                        <div className='w-6 h-1 bg-green-300'></div>
                        <p className='opacity-75'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet ut iusto voluptatem animi odit eius, minima quisquam voluptate id beatae non voluptas quis cumque itaque.</p>
                        <button className='p-2 font-bold w-1/3 border-blue-400 border-2 rounded-2xl hover:bg-purple-300 transition-all duration-200'>Sign up now</button>
                    </div>
             {/* right part */}
                    <img src="./hero-illustration-783a8736.jpg" className=' w-full max-w-[680px]' alt="" />
             </div>
             <div className=' w-[100%] absolute left-0 right-0 '>
                <img className='w-full object-fill ' src="./hero-shape-ae834698.svg"  width="" alt="" />
             </div>
         </section>
    </>
  )
}
