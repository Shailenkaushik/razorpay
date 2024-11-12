import React from 'react'

export default function Feature() {
  return (
    <section className='relative mt-[190px] overflow-hidden'>
        <img src="./dotted.png" className='absolute left-4 -top-[8rem]' width="233px" height="167px"  alt="image not found" />
        <img src="./dotted.png" className='absolute right-6 top-5' width="233px" height="167px"  alt="image not found" />
        <div className='w-7/12 flex flex-col mx-auto items-center justify-center gap-3 border-solid hover:border-dotted border-2 p-4 border-blue-200 rounded-md'>
            <h1 className='font-bold text-3xl'>Accept Payments with Razorpay Payment Suite</h1>
            <div className='w-6 h-1 bg-green-400'></div>
            <div className='flex flex-row'>
                {/* left */}

                <div className='flex flex-col items-start justify-center mx-auto gap-4'>
                    <h3 className='font-bold text-3xl'>Supercharge your business with the all‑powerful <span className='text-blue-400'> Payment Gateway</span></h3>
                    <ul className='gap-2'>
                        <li className='font-light p-1'>100+ Payment Methods</li>
                        <li className='font-light p-1'>Industry Leading Success Rate</li>
                        <li className='font-light p-1'>Superior Checkout Experience</li>
                        <li className='font-light p-1'>Easy to Integrate</li>
                        <li className='font-light p-1'>Instant Settlements from day 1</li>
                        <li className='font-light p-1'>In-depth Reporting and Insights</li>
                    </ul>
                    <div className='flex flex-row gap-3 items-center justify-center border-solid hover:border-dotted border-2 p-2 border-blue-100 rounded-md'>
                        {/* button */}
                        <button className='border-solid border-3 hover:border-dotted border-black-400 bg-blue-300 p-2 rounded-md cursor-pointer hover:bg-cyan-300 transition-all duration-200'> Sign up now</button>
                        {/* hyperlink */}
                        <div>
                            <a href=""><span className='text-blue-400'>know more</span></a>
                            <i></i>
                        </div>
                    </div>
                </div>

                {/* right */}
                <div>
                    <img src="./payment-suite.png" className='w-[1080px]'  alt="" />
                </div>
            </div>


        </div>
        

        <div className='w-7/12 mx-auto grid grid-cols-3 gap-6 p-10 mt-10 '>
            {/* box1 */}

            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>
            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>
            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>
            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>

            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>
            <div className='flex flex-col gap-4 relative cursor-pointer'>
                <img src="./payment-link.svg" className='absolute right-2 w-10 h-10 bg-blue-500 rounded-full' alt="kjjk" />
                <h3 className='font-bold text-xl'>Payment Links</h3>
                <p>Create, Copy & Collect With Payment Button. Collect one time or subscription payments & more</p>
                <div>
                 <a href=""><span className='text-blue-400'>know more</span></a>
                  <i></i>
                </div>

            </div>
          
        </div>
        
    </section>
  )
}
