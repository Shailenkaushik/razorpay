import React from 'react'

export default function Navbar() {
  return (
    <div>
      {/* 3 div hai ya per , matlab 3 items ko flex kara hai */}

      <nav className='bg-gradient-to-r from-cyan-500 to-purple-500  '>
         <div className='flex item-center justify-between relative w-[1080px] mx-auto '> 
         {/* w-1080 is used to keep fixed width , mxauto for equal margin on both sides */}
            
              <a href="/" className='py-4 '>
                <img src={'./razor.png'} width='125px' height="30px" alt="i am good" />
              </a>
           <div className='flex justify-between space-x-6'>
            <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Payment</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
            

              <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Banking</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
              <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Payroll</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
              <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Partners</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
              <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Resource</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
              <div className='text-white hover:text-pink-300 transition-all cursor-pointer items-center duration-200 mt-4 relative group'>
              {/* group is used when you want to stlye on basis of parent like he on hover of parent i want a underline. relative is very important here as if i don't use it then which i hover the child, underline comes on parent ka parent(means pura navbar get underlined) */}
                  <a href="#">Pricing</a>
                  <div className='absolute bottom-0 w-full h-1 bg-pink-300 hidden group-hover:block transition-all duration-200'></div>
              </div>
         </div>
         <div className='flex gap-6 items-center justify-between' >
            <img src="./flag.png" width="60px" height="15px" alt="" />
            <button className='font-bold text-sm cursor-pointer p-1 border-solid border-2 border-black hover:bg-pink-200 transition-all duration-200 rounded-md '>Login</button>
            <button className='font-bold text-sm  cursor-pointer p-1 border-solid border-2 bg-white border-black hover:bg-pink-200 transition-all duration-200 rounded-md'>Sign Up</button>
         </div>

         </div>
         
       </nav>
    </div>
  )
}
