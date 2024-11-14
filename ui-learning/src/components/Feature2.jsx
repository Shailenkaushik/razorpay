import React from 'react'

export default function Feature2() {
  return (
    <div className=''> 
    <section className=' relative mt-[190px] overflow-hidden  bg-deepBlue text-white p-6 '>
        
        <h1 className='font-bold text-3xl text-center p-2'>Explore Razorpay Business Banking</h1>
         <div className='w-6 h-1 bg-green-400 mx-auto my-2 '></div>
         
        <div className='w-7/12   z-20   flex  flex-col mx-auto items-center justify-center gap-3 border-solid hover:border-dotted border-2 p-8 border-blue-200 rounded-md'>

            <div className='flex flex-row  relative '>
                {/* left */}
                <img src="./x-flame-right.png" className='absolute top-[160px] -right-28  ' width="233px" height="167px"  alt="image not found" />
                <img src="./x-flame-right.png" className='absolute rotate-180 top-10 -left-32' width="233px" height="167px"  alt="image not found" />
                <div className='flex flex-col items-start justify-center mx-auto gap-4'>
                    <h3 className='font-bold text-3xl'>Manage your company’s finances with <img src="./razorpayX.svg" alt="" className='inline' />  <span className='text-green-400'>Business Banking</span> </h3>
                    <ul className='gap-2'>
                        <li className='font-light text-sm p-1'> Open a fully digital current account</li>
                        <li className='font-light text-sm p-1'>Automate payables & compliment payments</li>
                        <li className='font-light text-sm p-1'>Simplify and track spends with Corporate cards</li>
                        <li className='font-light text-sm p-1'>View financial insights at a glance</li>
                       



                    </ul>
                    <div className='flex flex-row gap-3 items-center justify-center border-solid hover:border-dotted border-2 p-2 border-blue-100 rounded-md'>
                        {/* button */}
                        <button className=' relative w-[180px] border-solid border-3 hover:border-dotted border-black-400 bg-blue-300 p-2 rounded-md cursor-pointer hover:bg-cyan-300 transition-all duration-200'>
                             Sign up now
                             <div className=' absolute flex  items-center justify-center bg-green-400 w-[30px]  -top-2 -bottom-2 right-2 m-1 skew-x-12'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <path d="M10 25H40M30 15l10 10-10 10" stroke="white" stroke-width="4" fill="none"/>
</svg>

                             </div>
                        </button>
                        {/* hyperlink */}
                        <div>
                            <a href=""><span className='text-blue-400'>know more</span>
                            </a>
                            <i></i>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div>
                    <img src="./buisness-banking.png" className='w-[1080px]'  alt="" />
                </div>
            </div>



        </div>
        
        <div className='w-7/12 mx-auto my-4 flex flex-row justify-center items-center gap-x-3 border-solid hover:border-dotted border-2 p-2 border-blue-100 rounded-md'>
            <h3 className='font-bold text-lg'>Check out the live demo to learn how RazorpayX works.
            No sign-up required!</h3> 
            <button className=' relative w-[260px] bg-blue-500 border-solid rounded-md p-2 hover:bg-blue-700' >
                Check out the demo
                <div className=' absolute flex  items-center justify-center bg-green-400 w-[30px]  -top-2 -bottom-2 right-2 m-1 skew-x-12'>
                             <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
  <path d="M10 25H40M30 15l10 10-10 10" stroke="white" stroke-width="4" fill="none"/>
</svg>

                             </div>
                </button>
        </div>
       
        
    </section>
    </div>
  )
}
